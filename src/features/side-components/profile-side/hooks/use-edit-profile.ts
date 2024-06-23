import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../../../services/api";
import { useState, ChangeEvent } from "react";
import { useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import UserEditSchema from "../validators/edit-profile-schema";
import UserEditForm from "../type/user-edit-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store/store";
import useGetMyProfile from "../../../profilCard/hook/use-get-my-profil";
import { SET_USER } from "../../../../redux/slice/auth";

function useEditUser() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<UserEditForm>({
    resolver: zodResolver(UserEditSchema),
    mode: "onChange",
  });

  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const { refetchGetMyProfile } = useGetMyProfile();

  console.log(errors);

  const toast = useToast();
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      // Generate a preview URL for the image
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const editUser = async (newData: UserEditForm) => {
    const formData = new FormData();
    formData.append("name", newData.name || user.name);
    formData.append("quote", newData.quote || user.quote||"");
    formData.append("username", newData.username || user.username);

    if (newData.profilePictureUrl && newData.profilePictureUrl[0]) {
      formData.append("profilePictureUrl", newData.profilePictureUrl[0]);
    }

    console.log("ini getValues", getValues())

    const response = await api.patch(`/api/v1/edit-profil`, formData, {
      headers: {
        Authorization: token,
      },
    });

    token = response.data.token;
    const userUpdate = response.data.updatedUser;

    if (token) {
      localStorage.setItem("token", `Bearer ${token}`);
      dispatch(SET_USER(userUpdate));
    }

    return response
  };

  let token = localStorage.getItem("token");

  const { mutateAsync } = useMutation({
    mutationFn: editUser,
    onSuccess: () => {
      toast({
        title: "User profile edited successfully",
        description: "Your profile has been successfully updated!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setPreview(null);
      reset();
      refetchGetMyProfile();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    },
  });

  const onSubmit: SubmitHandler<UserEditForm> = async (data) => {
    const response = await mutateAsync(data);
    console.log("Form data: ", data);
    console.log(response.data);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    preview,
    handleImageChange,
  };
}

export default useEditUser;

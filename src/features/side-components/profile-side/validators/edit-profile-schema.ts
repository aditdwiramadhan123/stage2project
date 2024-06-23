import * as z from "zod";

const UserEditSchema = z.object({
  name: z.string().optional(),
  username: z.string().optional(),
  quote: z.string().optional(),
  profilePictureUrl: z.instanceof(FileList).optional(),
});

export default UserEditSchema;

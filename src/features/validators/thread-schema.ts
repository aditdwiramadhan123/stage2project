import { z } from "zod";

const MAX_FILE_SIZE = 500000; // 500KB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const ThreadSchema = z.object({
  imageUrl: z
    .any()
    .optional() // Menjadikan imageUrl opsional
    .refine(
      (files) =>
        files === null ||
        files.length === 0 ||
        (files[0] && files[0].size <= MAX_FILE_SIZE),
      `Max file size is 5MB.`
    )
    .refine(
      (files) =>
        files === null ||
        files.length === 0 ||
        (files.length > 0 && ACCEPTED_IMAGE_TYPES.includes(files[0].type)),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  caption: z.string(),
});

export default ThreadSchema;

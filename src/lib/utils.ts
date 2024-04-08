import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// import { storage } from "./firebase";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export async function deleteImage(imagePath: string): Promise<void> {
//   try {
//     // Crie uma referência para a imagem no Storage
//     const imageRef = ref(storage, imagePath);

//     // Delete a imagem
//     await deleteObject(imageRef);

//     console.log("Imagem deletada com sucesso.");
//   } catch (error) {
//     console.error("Erro ao deletar a imagem:", error);
//     throw error; // Você pode tratar o erro conforme necessário
//   }
// }

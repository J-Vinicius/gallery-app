/* eslint-disable prefer-const */
import { Photo } from "@/types/photo";
import { storage } from "@/lib/firebase";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";

export const getAll = async () => {
  let list: Photo[] = [];

  const imagesFolder = ref(storage, "images");
  const photoList = await listAll(imagesFolder);

  for (let i in photoList.items) {
    let photoUrl = await getDownloadURL(photoList.items[i]);
    list.push({ name: photoList.items[i].name, url: photoUrl });
  }

  return list;
};

export const insert = async (file: File) => {
  if (["image/jpg", "image/jpeg", "image/png"].includes(file.type)) {
    let newFile = ref(storage, `images/${file.name}`);

    let upload = await uploadBytes(newFile, file);
    let photoUrl = await getDownloadURL(upload.ref);

    return { name: file.name, url: photoUrl } as Photo;
  } else {
    return new Error("Tipo de arquivo não permitido!");
  }
};

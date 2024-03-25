/* eslint-disable prefer-const */
import { Photo } from "@/types/photo";
import { storage } from "@/lib/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export const getAll = async () => {
  let list: Photo[] = [];

  const imagesFolder = ref(storage, "/images");
  console.log("Poha");
  const photoList = await listAll(imagesFolder);

  for (let i in photoList.items) {
    let photoUrl = await getDownloadURL(photoList.items[i]);
    list.push({ name: photoList.items[i].name, url: photoUrl });
  }

  return list;
};

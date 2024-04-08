const NotesContent = [
  "Colocar albums para as fotos",
  "Fazer função de download de imagem",
];

export const Notes = () => {
  return (
    <ul>
      {NotesContent.map((note, i) => (
        <li
          key={i}
          className="w-full bg-yellow-200 text-black p-2 rounded shadow"
        >
          {note}
        </li>
      ))}
    </ul>
  );
};

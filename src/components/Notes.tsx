const NotesContent = ["Colocar albums para as fotos"];

export const Notes = () => {
  return (
    <ul>
      {NotesContent.map((note, i) => (
        <li key={i} className="w-full bg-yellow-200 text-black p-2 rounded shadow">
          {note}
        </li>
      ))}
    </ul>
  );
};

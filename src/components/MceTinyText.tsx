import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const MceTinyText = ({ setDesc, hight }: any) => {
  const editorRef = useRef(null);

  return (
    <>
      <Editor
        onChange={(e) => setDesc(e.target.getContent())}
        apiKey="y9oom0880sfhg5fi9gjn9n34wvv05gn4s44tvupdficp9m90"
        onInit={(_, editor) => ((editorRef.current as any) = editor)}
        init={{
          height: hight ? +hight : 300,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
};

export default MceTinyText;

import React, { useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

function TinyMceRichText({ setRichTextContent, formSubmitiing }) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      setRichTextContent(editorRef.current.getContent());
    }
  }, [formSubmitiing]);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      setRichTextContent(editorRef.current.getContent());
    }
  };

  return (
    <>
      <Editor
        apiKey="p89maxr82xn26hrs38debj5hfzw20l5tdfjr3xvpxjqfpo80"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 300,

          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button type="button " onClick={log}>
        Log editor content
      </button>
    </>
  );
}

export default TinyMceRichText;

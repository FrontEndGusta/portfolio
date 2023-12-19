// useDownload.ts

const useDownload = () => {
  const downloadFile = (url: string) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        if (fileName != undefined) {
          const aTag = document.createElement("a");
          aTag.href = blobURL;
          aTag.setAttribute("download", fileName);
          document.body.appendChild(aTag);
          aTag.click();
          aTag.remove();
        }
      });
  };

  return {
    downloadFile,
  };
};

export default useDownload;

// useDownload.ts

const useDownload = () => {
  const downloadFile = (url: string) => {
    console.log("Downloading file from:", url);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to download file. HTTP status ${response.status}`);
        }
        return response.blob();
      })
      .then((blob) => {
        console.log("Blob received:", blob);

        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        if (fileName !== undefined) {
          console.log("File name:", fileName);

          const aTag = document.createElement("a");
          aTag.href = blobURL;
          aTag.setAttribute("download", fileName);
          document.body.appendChild(aTag);
          aTag.click();
          aTag.remove();

          console.log("Download completed successfully");
        }
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
      });
  };

  return {
    downloadFile,
  };
};

export default useDownload;

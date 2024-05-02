const handleDownload = (xmlData) => {
  const blob = new Blob([xmlData], { type: "text/xml" });

  const url = URL.createObjectURL(blob);

  // Create a download link
  const link = document.createElement("a");
  link.href = url;
  link.download = "spnpccharacters.xml";
  link.click();

  // Clean up
  URL.revokeObjectURL(url);
};

export default handleDownload;

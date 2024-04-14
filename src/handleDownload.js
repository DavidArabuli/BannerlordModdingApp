const handleDownload = () => {
  const blob = new Blob([xmlData], { type: "text/xml" });

  const url = URL.createObjectURL(blob);

  // Create a download link
  const link = document.createElement("a");
  link.href = url;
  link.download = "converted_data.xml";
  link.click();

  // Clean up
  URL.revokeObjectURL(url);
};

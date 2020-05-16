"use strict";

const config = {
  DefaultUploadOptions: {
    portalUrl: "https://scp.techandsupply.ca",
    portalUploadPath: "/pubaccess/pubfile",
    portalFileFieldname: "file",
    portalDirectoryFileFieldname: "files[]",
    customFilename: "",
  },
  DefaultDownloadOptions: {
    portalUrl: "https://scp.techandsupply.ca",
  },
};

module.exports = config;

const domainName = (url) => {
  
    const domain = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?]+)\./im);
     let hostname = domain[1];
     if (hostname.includes(".")) {
       hostname = hostname.split(".")[0];
     }
     return hostname;
     
   }
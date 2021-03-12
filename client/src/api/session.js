import baseUrl from "../config";

const Session = {
    // Create session
    create: async params => {
      return fetch(`${baseUrl}/session`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    },
    // Destroy session
    destroy: async () => {
      return fetch(`${baseUrl}/session`, {
        credentials: "include",
        method: "DELETE"
      }).then(res => res.json());
    }
  };
  
  export default Session;
  
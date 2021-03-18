const API = `${process.env.REACT_APP_API_URL}/v1`;

const Session = {
    // Create session
    create: async params => {
      return fetch(`${API}/session`, {
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
      return fetch(`${API}/session`, {
        credentials: "include",
        method: "DELETE"
      }).then(res => res.json());
    }
  };
  
  export default Session;
  
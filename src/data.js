export const fetchAllPosts = async (accessToken, search, sortOrder) => {
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(
      `${
        import.meta.env.VITE_API_BASE_URL
      }/social/posts?limit=20&offset=0&_reactions=true&_author=true&sortOrder=${sortOrder}&_comments=true&_tag=${search || ''}`, 
      options
    );
    const data = await response.json();
    return data;
  };
  
  export const fetchProfileData = async (accessToken, name) => {
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(
      `${
        import.meta.env.VITE_API_BASE_URL
      }/social/profiles/${name}?_posts=true&_followers=true&_following=true`,
      options
    );
    const data = await response.json();
    return data;
  };
  
  export const fetchProfilePosts = async (accessToken, name) => {
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(
      `${
        import.meta.env.VITE_API_BASE_URL
      }/social/profiles/${name}/posts/?_author=true&_posts=true&_followers=true&_following=true`,
      options
    );
    const data = await response.json();
    return data;
  };
  
  export const updateProfile = async (accessToken, name, formData) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/social/profiles/${name}/media`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(formData),
        }
      );
       await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  export const updatePost = async (accessToken, id, formData) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/social/posts/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(formData),
        }
      );
       await response.json();
    
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  export const deletePost = async (accessToken, id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/social/posts/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
       await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  };
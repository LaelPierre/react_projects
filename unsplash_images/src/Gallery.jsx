import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const url =
  "https://api.unsplash.com/search/photos?client_id=JvIoAkzLNkmoHSROFHNI9T96zUfsL_RduCccnmX8zgA&query=office";

const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });

  return <h2>Gallery</h2>;
};

export default Gallery;

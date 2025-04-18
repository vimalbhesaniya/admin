import React, { useCallback, useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

const useAPI = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const usePostREQUEST = ({ PATH, BODY, HEADER, onSuccess, onError  , key = []}) => {
    return useMutation({
      mutationKey : key,
      mutationFn: async (body) => {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}${PATH}`,
          body,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: token,
              ...HEADER,
            },
          }
        );
        return data;
      },
      onSuccess: (data) => onSuccess(data),
      onError: (error) => onError(error),
    });
  };

  const getREQUEST = useCallback(
    async (PATH, BODY, HEADER) => {
      if (
        PATH.split("/")[0] != "fetchfetchAppliedJobs" &&
        PATH.split("/")[0] != "ListJob"
      ) {
      }
      try {
        const RESPONSE = await fetch(`${import.meta.env.VITE_API_URL}${PATH}`, {
          headers: {
            "Content-Type": "application/json",
            authorization: Cookies.get("token"),
          },
          body: BODY,
          method: "GET",
        });
        const data = await RESPONSE.json();
        if (data) {
        }
        setData(data);
        return data;
      } catch (error) {
        setError(error);
        return error;
      }
    },
    [data, error, loading]
  );

  const useGetRequest = ({ key = [], PATH, enabled, initialData }) => {
    return useQuery({
      queryKey: key,
      queryFn: async () => {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}${PATH}`,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: token,
            },
          }
        );
        return data.data;
      },
      enabled,
      initialData,
    });
  };

  const usePatchREQUEST = ({ PATH, onError, onSuccess, HEADER }) => {
    return useMutation({
      mutationFn: async (body) => {
        const { data } = await axios.patch(
          `${import.meta.env.VITE_API_URL}${PATH}`,
          body,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: token,
              ...HEADER,
            },
          }
        );
        return data;
      },
      onSuccess: (data) => onSuccess && onSuccess(data),
      onError: (error) => onError && onError(error),
    });
  };

  const useDeleteREQUEST = ({ PATH, onError, onSuccess, HEADER }) => {
    return useMutation({
      mutationFn: async (body) => {
        console.log('call--body', body);
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}${PATH}`,
          body,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: token,
              ...HEADER,
            },
          }
        );
        return data;
      },
      onSuccess: (data) => onSuccess && onSuccess(data),
      onError: (error) => onError && onError(error),
    });
  };

  return {
    usePostREQUEST,
    getREQUEST,
    useDeleteREQUEST,
    usePatchREQUEST,
    useGetRequest,
  };
};

export default useAPI;

// const response = await fetch("http://localhost:5500/login", {
//                     body: JSON.stringify({ email, password }),
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                 })

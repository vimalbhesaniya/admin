import React, { useContext } from "react";
import css from "../Dashboard/style.module.css";
import "../Connections/style.css";
import { ActiveModal } from "../../main";
import useAPI from "../../Hooks/useAPI";
import { RefreshState } from "../../App";
import { GlobalState } from "../../main";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useQueryClient } from "@tanstack/react-query";

const Applications = () => {
  const [currentState, setCurrentState] = useContext(GlobalState);
  const [isRefreshing, setIsRefreshing] = useContext(RefreshState);
  const api = useAPI();
  const [activeModalState, setActiveModalState] = useContext(ActiveModal);

  const queryClient = useQueryClient()

  const id = localStorage.getItem("id");

  const { data: appliedUsers , refetch} = api.useGetRequest({
    PATH: `applied-users/${id}`,
    enabled: true,
    initialData: { data: [] },
    key: ["applied-users"],
  });

  const { mutate } = api.useDeleteREQUEST({
    PATH: "delete",
    onSuccess: () => {
      Swal.fire({
        title: "Deleted!",
        text: "Your Application has been deleted.",
        icon: "success",
      });

      refetch()
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        mutate({
          COLLECTION_NAME: "jobapplications",
          WHERE: {
            _id: id,
          },
        }   );
      }
    });
  };

  return (
    <>
      <div className={css.body}>
        <div className={css.containerApp}>
          <div className="p-3 bg-white d-flex rounded-2 justify-content-between align-items-center  flex-wrap w-100">
            <div className="">
              <span
                className="fs-5 fw-bolder"
                style={{ color: "rgb(1, 182, 246)" }}
              >
                Applications
              </span>
            </div>
            <div className="">
              <span
                className="fs-5 fw-bolder"
                style={{ color: "rgb(1, 182, 246)" }}
              >
                {appliedUsers?.length}{" "}
              </span>
            </div>
          </div>
        </div>
        <div className={css.TableContainer}>
          <table class="table table-responsive-md  align-middle mb-0 bg-white">
            <thead class="table-dark ">
              <tr>
                <th className="">Applicant</th>
                <th className="">Email</th>
                <th className="">Position</th>
                <th className="">Resume</th>
                <th className="">Action</th>
              </tr>
            </thead>
            {isRefreshing && (
              <thead>
                <tr>
                  <td colSpan={5} className="text-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </td>
                </tr>
              </thead>
            )}
            {appliedUsers?.length > 0 ? (
              appliedUsers?.map((e) => {
                return (
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            src={`${e?.userId?.profileImage}`}
                            alt=""
                            onError={(e) =>
                              (e.target.src =
                                "https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png")
                            }
                            style={{
                              width: "45px",
                              height: "45px",
                            }}
                            class="rounded-circle"
                          />
                          <div class="ms-3">
                            <p class="fw-bold mb-1">
                              {e?.userId?.firstName} {e?.userId?.lastName}
                            </p>
                            <p class="text-muted mb-0">{e?.userId?.email}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="fw-normal mb-1 text-nowrap ">
                          {e?.userId && e?.email}
                        </p>
                      </td>
                      <td>{e?.jobId?.Title}</td>
                      <td>
                        <a href={e?.cv} download={true} target="_blank">
                          <i className="fa fa-eye fs-3"></i>
                        </a>
                      </td>
                      <td className="d-grid gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            setActiveModalState("profileViewOfConnections");
                            localStorage.setItem(
                              "connectionId",
                              JSON.stringify(e?.userId)
                            );
                          }}
                          class="btn btn-outline-info fw-bold  btn-rounded"
                        >
                          Profile <i className=" fa fa-user"></i>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            localStorage.setItem("mailTo", e?.email);
                            localStorage.setItem(
                              "mailFrom",
                              currentState?.Email
                            );
                            setActiveModalState("sendmail");
                          }}
                          class="btn btn-outline-success fw-bold  btn-rounded"
                        >
                          <i
                            title="hire"
                            class="fa-regular fa-envelope fs-5"
                          ></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-danger fw-bold   btn-rounded"
                          onClick={() => handleDelete(e?._id)}
                        >
                          <i className="fa fa-close"></i> DELETE
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })
            ) : (
              <thead>
                <tr>
                  <td colSpan={5} className="text-center">
                    <span className="text-center fs-4 font-monospace">
                      <i class="fa-regular fa-face-frown text-danger "></i>No
                      Applications Found!
                    </span>
                  </td>
                </tr>
              </thead>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default Applications;

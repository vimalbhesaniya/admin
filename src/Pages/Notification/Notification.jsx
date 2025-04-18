import React, { useContext, useState, useCallback, useEffect } from 'react'
import Tab from '../../Shared/Tab'
import css from "../Dashboard/style.module.css"
import Navbar from '../../Shared/Navbar'
import { GlobalState } from '../../main'
import useAPI from '../../Hooks/useAPI'

const Notification = () => {
    const [currentState, setCurrentState] = useContext(GlobalState);
    const api = useAPI();

    const cid = localStorage.getItem("id");

    const { data } = api.useGetRequest({
      PATH: `applied-users/${cid}`,
      enabled: true,
      initialData: [],
      key: ["notifications"],
    });

    const { data: connections } = api.useGetRequest({
      PATH: `getConnections/${cid}`,
      enabled: true,
      initialData: [],
      key: ["connections"],
    });

    return (
      <>
        <div className={css.body}>
          <Navbar left={`Hello 👋 ${currentState.HRDetail.Name}!`} />
          <Tab
            tabName={"Notifications"}
            action={
              <>
                <span className="fs-5 fw-bold text-primary">
                  {data?.length + connections?.length}
                </span>
              </>
            }
          ></Tab>
          {!data?.length && !connections?.length && (
            <>
              <span className="alert alert-danger "> No data found</span>
            </>
          )}
          {Array.isArray(data) &&
            data?.map((e) => {
              return (
                <div
                  className={`alert alert-success d-flex justify-content-between  align-items-center  ${css.notificationCard}`}
                >
                  <span>
                    {e?.userId?.firstName} {e?.userId?.lastName} has applied for
                    the {e?.jobId?.Title} position.
                  </span>
                  <span>
                    <i className="fa fa-close"></i>
                  </span>
                </div>
              );
            })}
          {Array.isArray(connections) &&
            connections?.map((e) => {
              return (
                <div
                  className={`alert alert-primary d-flex justify-content-between  align-items-center  ${css.notificationCard}`}
                >
                  <span>
                    You've gained a new connection: {e?.firstName} {e?.lastName}
                  </span>
                  <span>
                    <i className="fa fa-close"></i>
                  </span>
                </div>
              );
            })}
        </div>
      </>
    );
}

export default Notification
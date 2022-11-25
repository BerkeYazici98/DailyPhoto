import React from "react";
import { InferGetServerSidePropsType } from 'next';
import EntryForm from "../components/EntryForm"
import { Entry } from "../types/Entry";
import axios from "axios";
import { useRouter } from "next/router";

const New = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter();

        const onSubmit = async (data: Entry) => {
     try {
      await axios.post(
          "http://127.0.0.1:8000/entries/",
            data
      )
        router.push('/')
     } catch (e) {
            console.log("server error",e)
     }
    }


    return (
        <div>
            <EntryForm onSubmit={onSubmit} projects={props.project} />
        </div>
    );
};

export default New;

export const getServerSideProps = async () => {
    const projectUrl = "http://127.0.0.1:8000/api/projects/"

    const data = await fetch(projectUrl)
    const project = await data.json()

    return {
        props: {
            project
        }
    }
}

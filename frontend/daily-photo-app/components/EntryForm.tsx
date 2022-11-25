import React from "react";
import {useForm} from "react-hook-form";
import {Entry} from "../types/Entry";
import {Project} from "../types/Project";
import PhotoGallery from "./PhotoGallery";
import {useRouter} from "next/router";
import axios from "axios";

type EntryFormPropsType = {
    entry?: Entry
    onSubmit?: (data: Entry) => void
    projects: Project
}

const EntryForm = (props: EntryFormPropsType) => {

    const {register, handleSubmit, formState: {errors}} = useForm<Entry>({
        defaultValues: props.entry
    });

    const onError = (errors: any) => {
        console.log("error", errors)
    }

    return (
        <form onSubmit={handleSubmit(props.onSubmit, onError)}>
            <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
                    <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">New Entry</h3>
                    </div>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="customer-name" className="block text-sm font-medium text-gray-700">
                                Project Name
                            </label>
                            <select
                                {...register("project", {
                                    required: {
                                        value: true,
                                        message: "Project name is required"
                                    }
                                })}
                                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                {
                                    props.projects.map(project =>
                                        <option key={project.id} value={project.id}>{project.name}</option>)
                                }
                            </select>
                            <span className="text-red-600 font-semibold">{errors.project?.message}</span>
                        </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="customer-name" className="block text-sm font-medium text-gray-700">
                            Entry Description
                        </label>
                        <input
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: "Entry description is required"
                                }
                            })}
                            className="mt-1 block w-1/2 rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        <span className="text-red-600 font-semibold">{errors.description?.message}</span>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="customer-name" className="block text-sm font-medium text-gray-700">
                            Date
                        </label>
                        <input type="date"
                               className="form-control block w-40 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                               placeholder="Select a date"/>
                    </div>
                    <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Add New Photo
                    </button>
                </div>
                <div>
                    <PhotoGallery photo=""></PhotoGallery>
                </div>
            </div>

        </form>
    )
}

export default EntryForm;
import {useEffect, useState} from "react";
import * as React from "react";
import {getFiles, uploadImage} from "../Utils/YellowPages.ts";
import type IFile from "../Utils/IFile.ts";
import {useWidget} from "../Utils/WidgetContext.tsx";


export const ImageUpload = () => {
    const [currentImage, setCurrentImage] = useState<File>()
    const [previewImage, setPreviewImage] = useState<string>()
    const [progress, setProgress] = useState<number>()
    const [message, setMessage] = useState<string>()
    const {widget, setWidget} = useWidget();

    const [imageInfos, setImageInfos] = useState<Array<IFile>>([]);

    const selectImage = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const selectedFile = event.target.files?.[0];
        if (!selectedFile) return;

        const MAX_SIZE_MB = 1
        const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024

        if (selectedFile.size > MAX_SIZE_BYTES){
            alert("Image must be 1MB or less")
            event.target.value = ""
            return;
        }

        setCurrentImage(selectedFile)
        const previewURL = URL.createObjectURL(selectedFile)
        setPreviewImage(URL.createObjectURL(selectedFile))
        setProgress(0)

        setWidget({...widget, image: [{imgUrl:previewURL}]})

    }

    const upload = () => {
        setProgress(0)
        if (!currentImage)
            return;

        uploadImage(currentImage, (event: any) => {
            setProgress(Math.round((100 * event.loaded)/ event.total));
        })
            .then((response) => {
                setMessage(response.data.message)
                return getFiles()
            })
            .then((files) =>{
                setImageInfos(files.data)
            })
            .catch((err) => {
                setProgress(0)
                if (err.response && err.response.data && err.response.data.message){
                    setMessage(err.response.data.message)
                }else {
                    setMessage("could not upload")
                }
                setCurrentImage(undefined)
            })
    }

    useEffect(() => {
        getFiles().then((response) => {
            const data = response.data;
            setImageInfos(Array.isArray(data) ? data : [data]);
        })
    }, [])



    return(
        <>
            <div className={"flex content-center justify-start"}>
                <div>
                    <label className="border-2 shadow-md bg-[#3185FC] text-white p-0.5 m-2 cursor-pointer rounded-full">
                        Select Image
                        <input
                            type="file"
                            accept="image/png"
                            multiple={false}
                            onChange={selectImage}
                            style={{ display: "none" }}
                        />
                    </label>
                </div>

                <div>
                    <button
                    disabled={!currentImage}
                    onClick={upload}
                    className={"border-2 bg-[#3185FC] text-white shadow-md p-0.5 m-2"}
                    >
                        Upload
                    </button>
                </div>
            </div>

            {currentImage && progress > 0 && (
                <div className={"max-w-96"}>
                    <div
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{width: progress + "%"}}
                    >
                        {progress}%
                    </div>
                </div>
            )}

            {previewImage && (
                <div className={"max-h-18 max-w-20 m-1 mb-5"}>
                    <label>Preview:
                    <img src={previewImage} alt={""}/>
                    </label>
                </div>
            )}

            {message && (
                <div role={"alert"}>
                    {message}
                </div>
            )}

        </>
    )

}

import { Dispatch, SetStateAction } from "react"

export const getHandleUploadStart = (setProgress: Dispatch<SetStateAction<number>>, setUploading: Dispatch<SetStateAction<any>>) => {
    return () => {
        setProgress(0);
        setUploading(true);
    }
}

export const getHandleProgress = (setProgress: Dispatch<SetStateAction<number>>) => (progress: number) => setProgress(progress)

export const getHandleUploadError = (setUploading: Dispatch<SetStateAction<any>>) => {
    return (error: string) => {
        setUploading(error);
        console.error(error);
    }
}

export const getHandleUploadSuccess = (setProgress: Dispatch<SetStateAction<number>>, setUploading: Dispatch<SetStateAction<any>>, setName: Dispatch<SetStateAction<string>>, firebase: any, setImageUrl: Dispatch<SetStateAction<string>>) => {
    return (name: string) => {
        setProgress(100);
        setUploading(false);
        setName(name);
        firebase.storage.ref("products").child(name).getDownloadURL().then(url => {
            setImageUrl(url);
        });
    }
}
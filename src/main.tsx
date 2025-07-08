// base javasript entry point referenced by index.html

import FileUploadDropZone from "@components/FileUploadDropZone"
import React, { useState } from "react"
import ReactDOM from "react-dom/client"


const App = () => {
	const [files, setFiles] = useState<File[]>([])

	return (
			<FileUploadDropZone
				fileDescription="Please upload a file."
				files={files}
				setFiles={setFiles}
			/>
	)
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

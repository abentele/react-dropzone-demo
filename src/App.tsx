// App base configuration for MUI


import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import FileUploadDropZone from "@components/FileUploadDropZone"
import { useState } from "react"

const App = () => {
	const [files, setFiles] = useState<File[]>([])

    return (
		<>
			<FileUploadDropZone
				fileDescription="Please upload a file."
				files={files}
				setFiles={setFiles}
			/>
		</>
	)
}

export default App

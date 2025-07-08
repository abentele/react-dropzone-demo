import UploadFileIcon from "@mui/icons-material/UploadFile"
import { Card, CardContent, CardHeader, Divider, FormControl, FormHelperText, Stack, Typography } from "@mui/material"
import { useDropzone } from "react-dropzone"
import FilePresentIcon from "@mui/icons-material/FilePresent"

interface Props {
    fileDescription: string
    files: File[]
    setFiles: React.Dispatch<File[]>
    error?: boolean
    helperText?: string
}

export default function FileUploadDropZone({ fileDescription, files, setFiles, error, helperText }: Props) {
    const { getRootProps, getInputProps } = useDropzone({ onDrop: setFiles })

    return (
        <>
            <Stack
                direction="column"
                spacing={2}
                sx={{
                    boxShadow: 2,
                    background: "light-grey",
                    border: "1px dotted lightgray",
                    borderRadius: "3px",
                    ":hover": {
                        backgroundColor: "grey",
                        border: "1px solid grey",
                        cursor: "pointer",
                    },
                    minWidth: "550px",
                }}
            >
                <FormControl error={error}>
                    <div {...getRootProps()}>
                        <Stack
                            direction="column"
                            sx={{
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "50px",
                            }}
                        >
                            <input {...getInputProps()} />
                            <Stack direction="row" flexWrap="wrap" useFlexGap spacing={2}>
                                {files.map((file) => (
                                    <Card key={file.name} sx={{ margin: "5px" }}>
                                        <CardHeader titleTypographyProps={{ variant: "body2" }} title={file.name} />
                                        <Divider />
                                        <CardContent>
                                            <FilePresentIcon />
                                        </CardContent>
                                    </Card>
                                ))}
                            </Stack>
                            {files.length == 0 && (
                                <>
                                    <Typography variant="body1" color="secondary">
                                        {fileDescription}
                                    </Typography>
                                    <UploadFileIcon color="secondary" fontSize="large" sx={{ marginTop: "15px" }} />
                                </>
                            )}
                            <FormHelperText>
                                {helperText}
                                {"\u00a0"}
                            </FormHelperText>
                        </Stack>
                    </div>
                </FormControl>
            </Stack>
        </>
    )
}

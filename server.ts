import app from "./src/app";

const PORT: number = 3055;

app.listen(PORT, () => {
    console.log(`listen at port: http://localhost:${PORT}`);
});

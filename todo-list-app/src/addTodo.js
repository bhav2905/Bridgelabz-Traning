import fs from "fs";

function addTodo(name, task) {
    try {
        if (!fs.existsSync("todo.json")) return "file not found";

        let data = JSON.parse(
            fs.readFileSync("todo.json", "utf-8")
        );

        let user = data.find(
            (value) => value.name === name
        );

        if (!user) return "user not found";

        user.todo.push({
            task,
            completed: false
        });

        fs.writeFileSync("todo.json", JSON.stringify(data, null, 2));
        return "todo added";

    } catch (error) {
        console.log(error);
        return "add todo failed";
    }
}

export default addTodo;

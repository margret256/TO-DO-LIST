body {
    font-family: Arial, sans-serif;
    background: #eef2f3; display: flex; justify-content: center; padding: 20px;
}
.container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); width: 350px; }
h1 { text-align: center; color: #333; }
input { padding: 10px; width: calc(100 % - 22px); margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px; }
button { padding: 8px; margin: 3px; cursor: pointer; border: none; border - radius: 4px; }
.add-btn { background-color: #28a745; color: white; }
.edit-btn { background-color: #ffc107; color: white; }
.delete-btn { background-color: #dc3545; color: white; }
ul { list-style: none; padding: 0; }
li { background: #fafafa; padding: 8px; margin-bottom: 5px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #ddd; border-radius: 4px; transition: background 0.3s; }
li.completed { text-decoration: line-through; color: gray; background: #d4edda; }
li:hover { background: #f1f1f1; }
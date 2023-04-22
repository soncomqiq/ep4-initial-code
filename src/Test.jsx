function Test() {
    const studentArray = [ { name: "A", age: 16 }, { name: "B", age: 17 }, { name: "C", age: 15 } ];
    return (
      <div>
        <h1>Hello React</h1>
        {studentArray.map(e => <div>{e.name}</div>)}
        <h2>Hello JS</h2>
      </div>
    );
}
export async function fakeApi(number: number){
    const app = <HTMLDivElement>document.getElementById('app');
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${number}`);
    const Data = await response.json();
    app.innerHTML = `
    <div>
        <H3>id:${Data.id}</H3>
        <H3>body:${Data.body}</H3>
        <H3>title:${Data.title}</H3>
    </div>
  `
}
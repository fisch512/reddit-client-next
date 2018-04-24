export default (props) => (
  <div>
    <button onClick={() => props.onRefresh()}>Refresh</button>
    <h1> {props.data.title} </h1>
    <p> {props.data.publicDescription} </p>
    <p> {props.data.newListings[0].title} </p>
  </div>
)

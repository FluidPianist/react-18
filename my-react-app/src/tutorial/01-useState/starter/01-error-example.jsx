const ErrorExample = () => {
  let count = 0
  const increment = () => {
    count++
    console.log(count)
    document.getElementById('count').innerHTML = count
  }
  return (
    <div>
      <h2 id="count">{count}</h2>
      <button className="btn" onClick={increment}>
        Increase
      </button>
    </div>
  )
}

export default ErrorExample

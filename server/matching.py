print("Hello")
useEffect(() => {
    fetch('/getNames').then(
      response => response.json()
    ).then(
      data => setInitialData(data)
    )
  })

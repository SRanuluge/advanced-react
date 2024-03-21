function DessertsList(props) {
  const {data} = props
  return data.filter((list) => list.calories <= 500).sort((a, b) => a.calories - b.calories).map(({ name:dessertName, calories:dessertCalories }) => {
    return <ul>
      <li>{`${dessertName} - ${dessertCalories} cal`}</li>
    </ul>
  })
}

export default DessertsList;

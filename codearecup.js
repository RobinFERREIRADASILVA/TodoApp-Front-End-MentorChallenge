countTask = () => {
  const count = this.state.allTask.filter((task) => task.done === false).length;
  return count;
}

handleFilters = (filterName) => {
  const { allTask, filteredList, allFilters } = this.state;

  let taskActive = [];

  if (filterName === 'Active') {
    taskActive = allTask.filter((task) => task.done === false);
  }
  else if (filterName === 'Completed') {
    taskActive = allTask.filter((task) => task.done === true);
  }
  else if (filterName === 'All') {
    taskActive = allTask;
  }

  const newFilters = allFilters.map((filter) => {
    if (filter.active === true)
    {
      const oldFilter = { ...filter, active: false };
      return oldFilter;
    }
    if (filter.name === filterName)
    {
      const newFilter = { ...filter, active: true };
      return newFilter;
    }
    return filter;
  });

  this.setState({
    filteredList: taskActive,
    allFilters: newFilters,
  });
};


const count = this.countTask();

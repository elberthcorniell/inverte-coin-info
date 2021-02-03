export const formatNumber = (x = 0, accurracy = 8) => {
  const string = Number(x).toFixed(accurracy);
  const arr = string.toString().split('.');
  const result = arr[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return !arr[1] ? result : `${result}.${arr[1]}`;
};

export const getChartData = (arr = []) => {
  const data = arr.filter(x => x.target === 'USD');
  const dataFeed = Array.from(data, x => x.last);
  const dataDate = Array.from(data, x => x.timestamp);

  return canvas => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 350, 0, 0);
    gradient.addColorStop(0, 'rgba(34,80,238,0)');
    gradient.addColorStop(1, 'rgba(34,80,238,0.3)');
    return {
      labels: dataDate,
      datasets: [
        {
          label: 'Date/Percent',
          backgroundColor: gradient,
          borderColor: '#5b86e5',
          pointBorderColor: 'rgba(34,80,238,0)',
          borderWidth: 4,
          hoverBackgroundColor: 'rgba(34,80,238,0.4)',
          hoverBorderColor: 'rgba(34,80,238,1)',
          data: dataFeed,
        },
      ],
    };
  };
};

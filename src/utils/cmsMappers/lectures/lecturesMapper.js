import moment from 'moment';

const map = (cmsLecture) => {
  const eventDate = moment(cmsLecture.elements.eventdate.value).utc();
  return {
    title: cmsLecture.elements.title.value,
    address: cmsLecture.elements.address.value,
    eventDate: eventDate,
    formattedEventDate: eventDate.format('DD.MM.YYYY HH:mm'),
    description: cmsLecture.elements.description.value,
  };
};

const mapAll = (cmsLectures) => {
  const dateNow = moment().utc();
  return cmsLectures
    .map((l) => map(l))
    .filter((l) => l.eventDate >= dateNow)
    .sort((a, b) => {
      return b - a;
    });
};

export { mapAll as mapCmsLectures };

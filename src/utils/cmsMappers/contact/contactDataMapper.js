const map = (cmsContactData) => {
  return {
    fullName: cmsContactData.elements.fullname.value,
    address: cmsContactData.elements.address.value,
    email: cmsContactData.elements.email.value,
    nip: cmsContactData.elements.nip.value,
    phone: cmsContactData.elements.phone.value,
    facebookUrl: cmsContactData.elements.facebookurl.value,
    instagramUrl: cmsContactData.elements.instagramurl.value,
    youtubeUrl: cmsContactData.elements.youtubeurl.value,
  };
};

export { map as mapCmsContactData };

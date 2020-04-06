const Types = {
  NAV_LINK_ACTIVE: 'NAV_LINK_ACTIVE',
};

const navlinkActive = (link) => ({
  type: Types.NAV_LINK_ACTIVE,
  payload: link,
});

export default {
  navlinkActive,
  Types,
};

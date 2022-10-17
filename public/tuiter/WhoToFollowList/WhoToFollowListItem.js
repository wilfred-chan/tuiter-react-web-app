const WhoToFollowListItem = (who) => {
  return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <img
        src="/public/images/avatar/${who.avatarIcon}"
        class="rounded-circle float-end"
        style="width: 50px; height: 50px;"
        />
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                ${who.userName}<i class="fas fa-check-circle mx-2"></i>
            </div>
            ${who.handle}
        </div>
        <button type="button" class="btn btn-primary rounded-pill">
        Follow
        </button>
    </li>
    `;
};

export default WhoToFollowListItem;

function showTooltip(event) {
    const existingTooltip = document.querySelector('.tooltip');
    if (existingTooltip) {
        existingTooltip.remove();
    }

    const tooltipText = event.target.getAttribute('title');
    event.target.removeAttribute('title');

    const position = event.target.getAttribute('data-position') || 'top';

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = tooltipText;
    document.body.appendChild(tooltip);
    tooltip.classList.add('tooltip_active');

    const rect = event.target.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    let top, left;

    switch (position) {
        case 'top':
            top = rect.top + scrollY - tooltip.offsetHeight - 10;
            left = rect.left + scrollX;
            break;
        case 'bottom':
            top = rect.bottom + scrollY + 10;
            left = rect.left + scrollX;
            break;
        case 'left':
            top = rect.top + scrollY - (tooltip.offsetHeight - rect.height) / 2;
            left = rect.left + scrollX - tooltip.offsetWidth - 10;
            break;
        case 'right':
            top = rect.top + scrollY - (tooltip.offsetHeight - rect.height) / 2;
            left = rect.right + scrollX + 10;
            break;
        default:
            top = rect.top + scrollY - tooltip.offsetHeight - 10;
            left = rect.left + scrollX;
    }

    tooltip.style.position = 'absolute';
    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
}

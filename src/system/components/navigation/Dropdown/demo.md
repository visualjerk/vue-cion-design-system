## Basic usage

Use a dropdown for providing secondary actions and options.

```
<ds-dropdown>
  <ds-button
    slot="toggle"
    icon-right="angle-down">
    Dropdown
  </ds-button>
  <ds-dropdown-item>
    Dropdown option
  </ds-dropdown-item>
  <ds-dropdown-item>
    Dropdown option 2
  </ds-dropdown-item>
</ds-dropdown>
```

## Custom toggle components

Use any component as the dropdown toggle.

```
<ds-dropdown>
  <ds-button
    slot="toggle"
    icon="gear"
    ghost>
  </ds-button>
  <ds-dropdown-item>
    Dropdown option
  </ds-dropdown-item>
  <ds-dropdown-item>
    Dropdown option 2
  </ds-dropdown-item>
</ds-dropdown>
```
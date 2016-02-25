function getRandomTime() {
  let ts = new Date(new Date().getTime() - (Math.random() * 80 * 60 * 1000));
  return `${ts.getHours()}:${ts.getMinutes()}:${ts.getSeconds()} ` +
         `${ts.getDate()}-${ts.getMonth()+1}-${ts.getFullYear()}`;
}

export default [
    {
        "attributes": {
            "auto": false,
            "entity_id": [
                "lock.kitchen_door",
                "rollershutter.kitchen_window"
            ]
        },
        "entity_id": "group.kitchen",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "closed"
    },
    {
        "entity_id": "lock.kitchen_door",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "on"
    },
    {
        "attributes": {
            "current_position": 0
        },
        "entity_id": "rollershutter.kitchen_window",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "closed"
    },
    {
        "attributes": {
            "friendly_name": "Ceiling Lights",
            "brightness": 200,
            "xy_color": [
                0.6389,
                0.5028,
            ]
        },
        "entity_id": "light.ceiling",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "on"
    },
    {
        "attributes": {
            "entity_picture": "https://graph.facebook.com/KillBillMovie/picture",
            "friendly_name": "Chromecast",
            "supported_media_commands": 509,
            "media_title": "Kill Bill"
        },
        "entity_id": "media_player.living_room",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "playing"
    },
    {
        "attributes": {
            "friendly_name": "Outside humidity",
            "unit_of_measurement": "%"
        },
        "entity_id": "sensor.outside_humidity",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "54"
    },
    {
        "attributes": {
            "friendly_name": "Outside temperature",
            "unit_of_measurement": "\u00b0C"
        },
        "entity_id": "sensor.outside_temperature",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "15.6"
    },
    {
        "attributes": {
            "auto": true,
            "entity_id": [
                "device_tracker.Paulus",
                "device_tracker.Anne_Therese"
            ]
        },
        "entity_id": "group.all_devices",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "home"
    },
    {
        "attributes": {},
        "entity_id": "light.bed_light",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "off"
    },
    {
        "attributes": {
            "auto": true,
            "hidden": true,
            "entity_id": [
                "light.bowl",
                "light.ceiling",
                "light.tv_back_light",
                "light.bed_light"
            ],
            "friendly_name": "all lights"
        },
        "entity_id": "group.all_lights",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "on"
    },
    {
        "attributes": {
            "entity_id": [
                "group.living_room",
                "group.kitchen"
            ],
            "view": true,
            "hidden": true,
            "order": 0,
            "friendly_name": "Downstairs"
        },
        "entity_id": "group.downstairs",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "on"
    },
    {
        "attributes": {
            "friendly_name": "Table Lamp",
            "brightness": 200,
        },
        "entity_id": "light.bowl",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "on"
    },
    {
        "attributes": {
            "away_mode": "off",
            "temperature": "21",
            "current_temperature": "18",
            "unit_of_measurement": "\u00b0C"
        },
        "entity_id": "thermostat.nest",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "23"
    },
    {
        "attributes": {},
        "entity_id": "a.demo_mode",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "Enabled"
    },
    {
        "attributes": {
            "configure_id": "4415244496-1",
            "description": "Press the button on the bridge to register Philips Hue with Home Assistant.",
            "description_image": "/demo/images/config_philips_hue.jpg",
            "fields": [],
            "submit_caption": "I have pressed the button"
        },
        "entity_id": "configurator.philips_hue",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "configure"
    },
    {
        "attributes": {},
        "entity_id": "switch.decorative_lights",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "off"
    },
    {
        "attributes": {
            "auto": false,
            "entity_id": [
                "light.bed_light",
                "switch.decorative_lights"
            ],
            "friendly_name": "bedroom",
            "order": 2
        },
        "entity_id": "group.bedroom",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "off"
    },
    {
        "attributes": {"friendly_name": "TV Ambient Light"},
        "entity_id": "light.tv_back_light",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "off"
    },
    {
        "attributes": {
            "auto": false,
            "entity_id": [
                "light.bowl",
                "light.ceiling",
                "light.tv_back_light",
                "switch.ac",
                "media_player.living_room",
            ],
            "friendly_name": "Living Room",
            "order": 1,
        },
        "entity_id": "group.living_room",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "on"
    },
    {
        "attributes": {
            "friendly_name": "Good Morning"
        },
        "entity_id": "scene.good_morning",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "scening"
    },
    {
        "attributes": {
            "friendly_name": "Romantic"
        },
        "entity_id": "scene.romantic",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "scening"
    },
    {
        "attributes": {
            "friendly_name": "Water lawn"
        },
        "entity_id": "script.water_lawn",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "on"
    },

    {
        "attributes": {
            "friendly_name": "Alarm",
            "code_format": "^\\d{4}",
        },
        "entity_id": "alarm_control_panel.home",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "armed_home"
    },
    {
        "attributes": {
            "radius": 100,
            "latitude": 32.873708,
            "longitude": -117.226590,
            "icon": "mdi:home",
            "hidden": true
        },
        "entity_id": "zone.home",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "zoning"
    },
    {
        "attributes": {
            "radius": 250,
            "latitude": 32.896844,
            "longitude": -117.202204,
            "icon": "mdi:worker",
            "hidden": true
        },
        "entity_id": "zone.work",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "zoning"
    },
    {
        "attributes": {
            "radius": 250,
            "latitude": 32.880834,
            "longitude": -117.237556,
            "icon": "mdi:library",
            "hidden": true
        },
        "entity_id": "zone.school",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "zoning"
    },
    {
        "attributes": {
            "entity_picture": "https://graph.facebook.com/297400035/picture",
            "friendly_name": "Paulus",
            "gps_accuracy": 75,
            "latitude": 32.892950,
            "longitude": -117.203431,
            "battery": 56
        },
        "entity_id": "device_tracker.paulus",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "not_home"
    },
    {
        "attributes": {
            "entity_picture": "https://graph.facebook.com/621994601/picture",
            "friendly_name": "Anne Therese",
            "latitude": 32.879898,
            "longitude": -117.236776,
            "gps_accuracy": 250,
            "battery": 76
        },
        "entity_id": "device_tracker.anne_therese",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "school"
    },
    {
        "attributes": {
            "friendly_name": "AC",
            "icon": "mdi:air-conditioner"
        },
        "entity_id": "switch.ac",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "on"
    },
    {
        "attributes": {
          "entity_picture": "/demo/webcam.jpg",
          "friendly_name": "Demo Camera",
        },
        "entity_id": "camera.ip_camera",
        "last_changed": getRandomTime(),
        "last_updated": getRandomTime(),
        "state": "idle"
    }
];

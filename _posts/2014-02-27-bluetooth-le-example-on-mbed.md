---
layout:         post-mbed-org
title:          "Bluetooth LE Example on mbed - Health Thermometer!"
date:           2014-02-27T14:57:20.000Z
author:         Donal Morrissey
tags:           BLE, bluetooth, mbed, Nordic
originalUrl:    https://developer.mbed.org/blog/entry/Bluetooth-LE-example-on-mbed/
---

<p>
  Now the mbed Bluetooth APIs are almost complete and the <a href=
  "/blog/entry/Nordic-Bluetooth-Smart-SoC-running-mbed/">mbed-enabled
  Nordic nRF51822 single-chip Bluetooth LE hardware is available
  for pre-order</a>, here is a peek at how we can use the mbed BLE
  APIs to easily implement a Bluetooth LE Health Thermometer.
</p>
<p>
  Before we get in to the details, this video shows the Bluetooth
  LE Health Thermometer program in action:
</p>
<div class="flex-video">
  <iframe width="420" height="315" src=
  "https://www.youtube.com/embed/bKptA-QIFHs" frameborder="0"
  allowfullscreen="allowfullscreen"></iframe>
</div>
<h2>
  The Example
</h2>
<p>
  Here we are going to advertise and respond as a thermometer to
  devices that choose to connect to us. Bluetooth LE Health
  Thermometers implement the 'Health Thermometer' service, exposing
  temperature and other data from a BLE device intended for
  healthcare and fitness applications. Full details on the service
  can be found here:
</p>
<ul>
  <li>
    <a href=
    "https://developer.bluetooth.org/gatt/services/Pages/ServiceViewer.aspx?u=org.bluetooth.service.health_thermometer.xml"
    rel="nofollow">Bluetooth Health Thermometer Service</a>
  </li>
</ul>
<h2>
  Key Bluetooth LE Concepts
</h2>
<p>
  Lets get a basic understanding of BLE and it's core concepts:
</p>
<p>
  <strong>BLE -</strong> Bluetooth Low Energy, also known as
  Bluetooth Smart, is a wireless protocol designed specifically for
  low power applications, such as those for healthcare, security,
  fitness and home entertainment / energy monitoring. BLE makes up
  one form of the Bluetooth 4 specification, the other form is
  Bluetooth Classic (or Bluetooth Basic Rate) which is that
  standard Bluetooth interface you will have used for connecting
  with Bluetooth headsets, transferring files to/from your mobile
  device, etc.
</p>
<p>
  <strong>Generic Access Profile (GAP) -</strong> This is the first
  of two profiles that all BLE devices must implement. It defines
  the basic functionality required for a BLE device (physical/link
  layers, security, etc), and the basic characteristics of that
  device, such as device name, it's appearance/role (Heart Rate
  Monitor, keyboard, blood pressure monitor, etc), connection
  parameters, etc.
</p>
<p>
  <strong>Generic Attribute Profile (GATT) -</strong> This is the
  second profile that all BLE devices must implement, and is the
  high-level protocol that BLE devices use to communicate. GATT
  defines two roles: Server and Client. The Server is typically the
  low power device that is exposing various services (e.g.
  temperature monitoring, speed monitoring, etc) which are consumed
  by a client (computer, mobile phone, etc).
</p>
<p>
  <strong>Service -</strong> A service is a particular
  functionality set that a device supports. A single device can
  support multiple services - as stated above, GATT and GAP are two
  services that all BLE devices must support. In addition to these,
  a Heart Rate Monitor device would support 'Heart Rate' service
  and, perhaps, a 'Battery Service'. A full list of BLE services
  can be found on the Bluetooth Developer Portal <a href=
  "https://developer.bluetooth.org/gatt/services/Pages/ServicesHome.aspx"
  rel="nofollow">here</a>.
</p>
<p>
  <strong>Characteristic -</strong> Each service has a set of
  characteristics assosicated with it, some mandatory and some
  optional. These characteristics define the data that is to be
  transmitted by that service. E.g. temperature measurement,
  temperature type, measurement interval, etc.
</p>
<h2>
  Bluetooth LE Health Thermometer Services
</h2>
<p>
  When a BLE client device requests the list of supported services
  and their characteristics from our Bluetooth LE Health
  Thermometer running on the Nordic nRF51822 evaluation board, it
  will receive the following:
</p>
<ul>
  <li>
    <a href=
    "https://developer.bluetooth.org/gatt/services/Pages/ServiceViewer.aspx?u=org.bluetooth.service.generic_access.xml"
    rel="nofollow">Generic Access (GAP)</a>
    <ul>
      <li>DeviceName Characteristic - The name of our device.
      </li>
      <li>Appearance Characteristic - The role that this device
      takes. A full list of possible appearances can be found
      <a href=
      "https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.gap.appearance.xml"
        rel="nofollow">here</a>.
      </li>
      <li>SlavePreferredConnectionParameters Characteristic-
      Various parameters related to how this device connects to
      clients. See <a href=
      "https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.gap.peripheral_preferred_connection_parameters.xml"
        rel="nofollow">here</a>.
      </li>
    </ul>
  </li>
  <li>
    <a href=
    "https://developer.bluetooth.org/gatt/services/Pages/ServiceViewer.aspx?u=org.bluetooth.service.generic_attribute.xml"
    rel="nofollow">Generic Attribute (GATT)</a>
    <ul>
      <li>ServiceChanged Characteristic
      </li>
    </ul>
  </li>
  <li>
    <a href=
    "https://developer.bluetooth.org/gatt/services/Pages/ServiceViewer.aspx?u=org.bluetooth.service.health_thermometer.xml"
    rel="nofollow">Health Thermometer</a>
    <ul>
      <li>Temperature Measurement Characteristic - This mandatory
      characteristic is used to present a temperature measurement
      to the client.
      </li>
    </ul>
  </li>
  <li>
    <a href=
    "https://developer.bluetooth.org/gatt/services/Pages/ServiceViewer.aspx?u=org.bluetooth.service.battery_service.xml"
    rel="nofollow">Battery Service</a>
    <ul>
      <li>Battery Level Characteristic - this mandatory
      characteristic is used to read the battery level as a
      percentage.
      </li>
    </ul>
  </li>
</ul>
<p>
  For the sake of brievety we have not included in our example the
  optional Characteristics supported by the Health Thermometer
  service, the full list can be seen <a href=
  "https://developer.bluetooth.org/gatt/services/Pages/ServiceViewer.aspx?u=org.bluetooth.service.health_thermometer.xml"
  rel="nofollow">here</a>.
</p>
<h2>
  Kit
</h2>
<p>
  We will be using the following to kit for our Bluetooth LE Health
  Thermometer:
</p>
<ul>
  <li>1 x <a href="/platforms/Nordic-nRF51822/">mbed-enabled Nordic
  nRF51822 board - Pre-order Now!!</a>
  </li>
  <li>1 x <a href="/components/TMP102-Temperature-Sensor/">TMP102
  temperature sensor</a> with jumper wires
  </li>
  <li>A Bluetooth LE enabled iOS or Android device running the free
  Nordic nRF Utility mobile app
  </li>
</ul>
<p>
  In this example, I'm using a pre-production version of the board
  ahead of it being available.
</p>
<h2>
  Hardware Setup
</h2>
<p>
  We connect our TMP102 to the nRF51822 Eval Board using the Jumper
  wires:
</p>
<table>
  <tr>
    <th>
      TMP102 Pin
    </th>
    <th>
      nRF51822 Eval Board Pin
    </th>
  </tr>
  <tr>
    <td>
      GND
    </td>
    <td>
      GND
    </td>
  </tr>
  <tr>
    <td>
      V+
    </td>
    <td>
      VCC
    </td>
  </tr>
  <tr>
    <td>
      SCL
    </td>
    <td>
      P0.20
    </td>
  </tr>
  <tr>
    <td>
      SDA
    </td>
    <td>
      P0.22
    </td>
  </tr>
  <tr>
    <td>
      ADD0
    </td>
    <td>
      GND
    </td>
  </tr>
</table>
<p>
  Our board and sensor will look like this:
</p>
<p>
  <img src=
  "https://developer.mbed.org/media/uploads/donalm/health_temperature_ble.jpg"
  alt="/media/uploads/donalm/health_temperature_ble.jpg" title=
  "/media/uploads/donalm/health_temperature_ble.jpg">
</p>
<h2>
  Software
</h2>
<p>
  We will run through our example application from here:
</p>
<div class="flashbox fprogram">
  <h4 class="ftitle">
    <a class="button small radius" style=
    "font-weight: bold; position: relative; float: right;" href=
    "https://developer.mbed.org/compiler/#import:/users/donalm/code/BLE_Health_Thermometer_Blog/"
    target="compiler">Import program</a><a href=
    "/users/donalm/code/BLE_Health_Thermometer_Blog/">BLE_Health_Thermometer_Blog</a>
  </h4>
  <p>
    An example BLE Health Thermometer using the mbed BLE API and
    Nordic NRF51822
  </p>
  <p class="wiki-api-footer">
    Last commit <abbr class="timeago" title=
    "2014-02-23T14:39:55+00:00">23 Feb 2014</abbr> by
    <span><span class="authortext"><a href=
    "/users/donalm/"><img alt="" class="icon" src=
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAQABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABQYHCP/EACUQAAEDAwMDBQAAAAAAAAAAAAECAxEEBQYAByEUQVESIjEycf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGxEAAgIDAQAAAAAAAAAAAAAAAQIAAwQSEzL/2gAMAwEAAhEDEQA/AJFilFRZNlFvx6ruApGqt0pdcQgLhISTA7TxGiG9W3NPhi2au19bXW1YCS4/HsXMR2kGOI8HSbts9encrt7mPBLlfSPCoBcPpbQEnkrJ+EwYP7A51o7daxMZdj7NofcLdwZILPTkqSyogSVT9gRPHafOpNGIwGqiJWauDBvU/9k=">
    </a> <a href="/users/donalm/">Donal Morrissey</a></span></span>
  </p>
</div>
<p>
  We start off by creating instances of our nRF51822 and TMP102
  objects. Along with some LEDs for indication:
</p>
<div class="flashbox fcode">
  <h4 class="ftitle">
    main.cpp
  </h4>
  <pre class="mbed-code" offset="20">
nRF51822n   nrf;                               /* BLE radio driver */
TMP102      healthThemometer(p22, p20, 0x90);  /* The TMP102 connected to our board */

/* LEDs for indication: */
DigitalOut  oneSecondLed(LED1);        /* LED1 is toggled every second. */
DigitalOut  advertisingStateLed(LED2); /* LED2 is on when we are advertising, otherwise off. */
</pre>
</div>
<p>
  We then instantiate our Health Thermometer and Battery Level
  Service, including their mandatory characteristics. Note that we
  are not concerned with the GATT and GAP services, as they are
  automatically created by the BLE API interface.
</p>
<div class="flashbox fcode">
  <h4 class="ftitle">
    main.cpp
  </h4>
  <pre class="mbed-code" offset="28">
/* Health Thermometer Service */ 
uint8_t             thermTempPayload[5] = { 0, 0, 0, 0, 0 };
GattService         thermService (GattService::UUID_HEALTH_THERMOMETER_SERVICE);
GattCharacteristic  thermTemp (GattCharacteristic::UUID_TEMPERATURE_MEASUREMENT_CHAR,
                               5, 5, GattCharacteristic::BLE_GATT_CHAR_PROPERTIES_INDICATE);

/* Battery Level Service */
uint8_t            batt = 100;     /* Battery level */
uint8_t            read_batt = 0; /* Variable to hold battery level reads */
GattService        battService ( GattService::UUID_BATTERY_SERVICE );
GattCharacteristic battLevel   ( GattCharacteristic::UUID_BATTERY_LEVEL_CHAR, 1, 1,
                                 GattCharacteristic::BLE_GATT_CHAR_PROPERTIES_NOTIFY |
                                 GattCharacteristic::BLE_GATT_CHAR_PROPERTIES_READ);
</pre>
</div>
<p>
  Next up is the Advertising data and parameters, along with a list
  of services the device will support:
</p>
<div class="flashbox fcode">
  <h4 class="ftitle">
    main.cpp
  </h4>
  <pre class="mbed-code" offset="43">
/* Advertising data and parameters */
GapAdvertisingData   advData;
GapAdvertisingData   scanResponse;
GapAdvertisingParams advParams ( GapAdvertisingParams::ADV_CONNECTABLE_UNDIRECTED );

uint16_t             uuid16_list[] = {GattService::UUID_HEALTH_THERMOMETER_SERVICE,
                                      GattService::UUID_BATTERY_SERVICE};
</pre>
</div>
<p>
  The following is the application's main function. The code is
  straight forward enough: We initialise the BLE nrf object, adding
  the Appearance and various services that are supported. Then
  start advertising.
</p>
<div class="flashbox fcode">
  <h4 class="ftitle">
    main.cpp
  </h4>
  <pre class="mbed-code" offset="82">
int main(void)
{
    
    /* Setup blinky led */
    oneSecondLed=1;
    
    /* Setup an event handler for GAP events i.e. Client/Server connection events. */
    nrf.getGap().setEventHandler(new GapEventHandler());
    
    /* Initialise the nRF51822 */
    nrf.init();

    /* Make sure we get a clean start */
    nrf.reset();    

    /* Add BLE-Only flag and complete service list to the advertising data */
    advData.addFlags(GapAdvertisingData::BREDR_NOT_SUPPORTED);
    advData.addData(GapAdvertisingData::COMPLETE_LIST_16BIT_SERVICE_IDS, 
                   (uint8_t*)uuid16_list, sizeof(uuid16_list));
    advData.addAppearance(GapAdvertisingData::GENERIC_THERMOMETER);
    nrf.getGap().setAdvertisingData(advData, scanResponse);

    /* Health Thermometer Service */
    thermService.addCharacteristic(thermTemp);
    nrf.getGattServer().addService(thermService);
    
    /* Add the Battery Level service */
    battService.addCharacteristic(battLevel);
    nrf.getGattServer().addService(battService);

    /* Start advertising (make sure you've added all your data first) */
    nrf.getGap().startAdvertising(advParams);
    advertisingStateLed = 1;
    

    for (;;)
    {
        /* Now that we're live, update the battery level &amp; temperature characteristics */
        updateServiceValues();
        wait(1);
    }
}
</pre>
</div>
<p>
  Every second we update the values for the battery level and
  temperature characteristics:
</p>
<div class="flashbox fcode">
  <h4 class="ftitle">
    main.cpp
  </h4>
  <pre class="mbed-code" offset="129">
void updateServiceValues(void)
{
      /* Toggle the one second LED */
      oneSecondLed = !oneSecondLed;
      
      /* Update battery level */
      nrf.getGattServer().updateValue(battLevel.handle, (uint8_t*)&amp;batt, sizeof(batt));
      /* Decrement the battery level. */
      batt &lt;=50 ? batt=100 : batt--;;
      
      /* Update the temperature. Note that we need to convert to an ieee11073 format float. */
      float temperature = healthThemometer.read();
      uint32_t temp_ieee11073 = quick_ieee11073_from_float(temperature);
      memcpy(thermTempPayload+1, &amp;temp_ieee11073, 4);
      nrf.getGattServer().updateValue(thermTemp.handle, thermTempPayload, sizeof(thermTempPayload));
}
</pre>
</div>
<p>
  Finally we have our GAP events handler. When a client device
  connects to our device, our device will stop advertising. Once
  the client has disconnected, we need to instruct our device to
  start re-advertising.
</p>
<div class="flashbox fcode">
  <h4 class="ftitle">
    main.cpp
  </h4>
  <pre class="mbed-code" offset="60">
class GapEventHandler : public GapEvents
{
    //virtual void onTimeout(void) {}   
     
    virtual void onConnected(void)
    {
        advertisingStateLed = 0;
    }

    /* When a client device disconnects we need to start advertising again. */
    virtual void onDisconnected(void)
    {
        nrf.getGap().startAdvertising(advParams);
        advertisingStateLed = 1;
    }
};
</pre>
</div>
<p>
  To test our Bluetooth LE Health Thermometer, we compile, download
  and flash our program onto the Nordic nRF51822 board using the
  standard mbed workflow. When the board is powered, we will see
  the one second LED blinking regularly, and the advertising LED
  switched permanently on. We can then launch the Nordic Utility
  mobile application, open the temperature app, and click connect.
  The advertising LED on the board will switch off and the app will
  show data from our board:
</p>
<p>
  <img src=
  "https://developer.mbed.org/media/uploads/donalm/temperature_monitor.jpg"
  alt="/media/uploads/donalm/temperature_monitor.jpg" title=
  "/media/uploads/donalm/temperature_monitor.jpg">
</p>
<p>
  Once we press the disconnect button on in the app, the app will
  stop displaying updates and the board's advertising LED will
  switch on again.
</p>
<h2>
  Final Notes
</h2>
<p>
  The whole mbed program is running on the single-chip Nordic
  Bluetooth device, and connecting up to the temperature sensor was
  as simple as pulling in a component from the component database,
  so hopefully this gives a good feel for how simple it should be
  to create a working Bluetooth LE device that can be made really
  cheaply.
</p>
<p>
  If you want to get hold of one of the boards when they are
  released, take a look at:
</p>
<ul>
  <li>
    <strong><a href="/platforms/Nordic-nRF51822/">nRF51822 Platform
    Details and Pre-order</a></strong>
  </li>
</ul>
<div class="flashbox finfo">
  <h4 class="ftitle">
    Information
  </h4>
  <p>
    Check out the Bluetooth Developers site for a webinar about
    adding Bluetooth Smart using the mbed BLE API <a href=
    "https://developer.bluetooth.org/DevelopmentResources/Pages/Webinars.aspx"
    rel=
    "nofollow">https://developer.bluetooth.org/DevelopmentResources/Pages/Webinars.aspx</a>
  </p>
</div>


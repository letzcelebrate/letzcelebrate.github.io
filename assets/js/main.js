function useMyLocation() {
  if (!navigator.geolocation) {
    alert("La géolocalisation n'est pas supportée par votre navigateur.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
        );
        const data = await response.json();

        const city =
          data.address.city ||
          data.address.town ||
          data.address.village ||
          data.address.county ||
          "Votre position";

        document.getElementById("locationInput").value = city;
      } catch (e) {
        document.getElementById("locationInput").value = "Près de moi";
      }
    },
    () => {
      alert("Impossible d'accéder à votre position.");
    }
  );
}

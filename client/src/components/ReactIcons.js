import Select from 'react-select';
//import { MdDrone } from 'react-icons/md';
import {  FaTruckPickup} from 'react-icons/fa';
import { FaBus,FaMotorcycle,FaShuttleVan,FaTractor,FaShip,FaCaravan, FaBicycle, GiCrane,  FaCar, FaHome, FaLaptop, FaMobileAlt, FaTshirt, FaHeart, FaCouch, FaBriefcase, FaTools, FaGamepad, FaWrench, FaCog, FaBasketballBall } from 'react-icons/fa';
import { GiSewingNeedle } from 'react-icons/gi';
import { FaTv, FaUtensils, FaBlender,   FaSpa, FaPumpSoap, FaTemperatureHigh, FaSnowflake, FaPuzzlePiece, FaCamera, FaHeadphones } from 'react-icons/fa';
import { FaExchangeAlt, FaSearch,  FaSuitcaseRolling, FaHandshake, FaShoppingCart } from 'react-icons/fa';
import { FaBuilding, FaWarehouse, FaCity,  FaPagelines, FaIndustry, FaHotel, FaStore, FaTree } from 'react-icons/fa';
import { GiFactory, GiTreehouse, GiLevelEndFlag } from 'react-icons/gi';
import {   FaKeyboard, FaPrint,  FaMicrochip, FaVideo, FaNetworkWired, FaDesktop,   FaPlug } from 'react-icons/fa';
import { GiSchoolBag } from 'react-icons/gi';
import {   FaTabletAlt, FaPhoneAlt, FaClock, FaSimCard,   FaHeadphonesAlt, FaChargingStation,   FaBatteryFull, FaVolumeUp, FaBluetooth, FaGripVertical, FaShieldAlt, FaBoxOpen,   FaMousePointer, FaMemory, FaUsb } from 'react-icons/fa';
import { FaMale, FaFemale, FaShoePrints, FaChild, FaBaby,  FaGlasses, FaGem, FaSuitcase } from 'react-icons/fa';
import {   FaSprayCan, FaFirstAid  } from 'react-icons/fa';
import {  FaPaintRoller,   FaChair, FaStream, FaBed,     FaPencilRuler, FaLightbulb } from 'react-icons/fa';
import {   FaBookOpen,   FaBroom, FaLaptopCode, FaCalculator, FaSocks, FaUserTie, FaPenNib } from 'react-icons/fa';
import { FaHardHat, FaUniversity,   FaTruckMoving, FaBullhorn, FaLeaf,   FaBirthdayCake, FaStethoscope    } from 'react-icons/fa';
import { Form  } from 'react-bootstrap';
 

// Componente CategorySelect
export function CategorySelect({ handleChangeInput, postData }) {
  const options = [
    { value: 'Électroménager & Électronique', label: (<><FaTv style={{ marginRight: '8px' }}/> Électroménager & Électronique</>) },
    { value: 'Automobiles & Véhicules', label: (<><FaCar style={{ marginRight: '8px' }}/> Automobiles & Véhicules</>) },
    { value: 'Immobilier', label: (<><FaHome style={{ marginRight: '8px' }}/> Immobilier</>) },
    { value: 'Informatique', label: (<><FaLaptop style={{ marginRight: '8px' }}/> Informatique</>) },
    { value: 'Téléphones & Accessoires', label: (<><FaMobileAlt style={{ marginRight: '8px' }}/> Téléphones & Accessoires</>) },
    { value: 'Vêtements & Mode', label: (<><FaTshirt style={{ marginRight: '8px' }}/> Vêtements & Mode</>) },
    { value: 'Santé & Beauté', label: (<><FaHeart style={{ marginRight: '8px' }}/> Santé & Beauté</>) },
    { value: 'Meubles & Maison', label: (<><FaCouch style={{ marginRight: '8px' }}/> Meubles & Maison</>) },
    { value: 'Emploi', label: (<><FaBriefcase style={{ marginRight: '8px' }}/> Emploi</>) },
    { value: 'Services', label: (<><FaTools style={{ marginRight: '8px' }}/> Services</>) },
    { value: 'Loisirs & Divertissements', label: (<><FaGamepad style={{ marginRight: '8px' }}/> Loisirs & Divertissements</>) },
    { value: 'Matériaux & Équipement', label: (<><FaWrench style={{ marginRight: '8px' }}/> Matériaux & Équipement</>) },
    { value: 'Pièces détachées', label: (<><FaCog style={{ marginRight: '8px' }}/> Pièces détachées</>) },
    { value: 'Sport', label: (<><FaBasketballBall style={{ marginRight: '8px' }}/> Sport</>) },
  ];

  return (
    <Form>
      <Select
        options={options}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'subCategory',
            value: selectedOption?.value || '',
            type: 'text',
            checked: undefined
          }
        })}
        name="subCategory"
        value={postData ? options.find(opt => opt.value === postData.subCategory) : null}
        placeholder="Sélectionner une catégorie"
      />
    </Form>
  );
}

 
 
export function ItemsElectromenagerElectronique({ handleChangeInput, postData }) {
  const options = [
    { value: 'Téléviseurs et Démo', label: (<><FaTv style={{ marginRight: '8px' }} /> Téléviseurs et Démo</>) },
    { value: 'Fours et micro-ondes', label: (<><FaUtensils style={{ marginRight: '8px' }} /> Fours et micro-ondes</>) },
    { value: 'Petit électroménager de cuisine', label: (<><FaBlender style={{ marginRight: '8px' }} /> Petit électroménager de cuisine</>) },
    { value: 'Machines à coudre', label: (<><GiSewingNeedle style={{ marginRight: '8px' }}/> Machines à coudre</>)},
    { value: 'Beauté et Hygiène', label: (<><FaSpa style={{ marginRight: '8px' }} /> Beauté et Hygiène</>) },
    { value: 'Lavage et entretien', label: (<><FaPumpSoap style={{ marginRight: '8px' }} /> Lavage et entretien</>) },
    { value: 'Chauffages & Climatisation', label: (<><FaTemperatureHigh style={{ marginRight: '8px' }} /> Chauffages & Climatisation</>) },
    { value: 'Réfrigérateurs & Congélateurs', label: (<><FaSnowflake style={{ marginRight: '8px' }} /> Réfrigérateurs & Congélateurs</>) },
    { value: 'Pièces pour électroménager', label: (<><FaPuzzlePiece style={{ marginRight: '8px' }} /> Pièces pour électroménager</>) },
    { value: 'Appareils Photo et caméra', label: (<><FaCamera style={{ marginRight: '8px' }} /> Appareils Photo et caméra</>) },
    { value: 'Audio', label: (<><FaHeadphones style={{ marginRight: '8px' }} /> Audio</>) },
  ];

  return (
    <div style={{ width: '300px', margin: '20px auto' }}>
      <Select
        options={options}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'title',  // o el nombre correcto del campo
            value: selectedOption?.value || '',
            type: 'text',
            checked: undefined
          }
        })}
        name="title"
        value={postData ? options.find(opt => opt.value === postData.title) : null}
        placeholder="Sélectionner un produit"
      />
    </div>
  );
}
export function ItemsAutomobileVehicules({ handleChangeInput, postData }) {
  const options = [
    { value: 'Voitures', label: (<><FaCar style={{ marginRight: '8px' }} /> Voitures</>) },
    { value: 'Utilitaire', label: (<><FaTruckPickup style={{ marginRight: '8px' }} /> Utilitaire</>) },
    { value: 'Motos_Scooters', label: (<><FaMotorcycle style={{ marginRight: '8px' }} /> Motos & Scooters</>) },
    { value: 'Quads', label: (<>  Quads</>) },
    { value: 'Fourgon', label: (<><FaShuttleVan style={{ marginRight: '8px' }} /> Fourgon</>) },
    { value: 'Camion', label: (<><FaTruckMoving style={{ marginRight: '8px' }} /> Camion</>) },
    { value: 'Bus', label: (<><FaBus style={{ marginRight: '8px' }} /> Bus</>) },
    { value: 'Engin', label: (<><FaTractor style={{ marginRight: '8px' }} /> Engin</>) },
    { value: 'Tracteurs', label: (<><FaTractor style={{ marginRight: '8px' }} /> Tracteurs</>) },
    { value: 'Remorques', label: (<><FaTruckPickup style={{ marginRight: '8px' }} /> Remorques</>) },
    { value: 'Bateaux_Barques', label: (<><FaShip style={{ marginRight: '8px' }} /> Bateaux & Barques</>) },
    { value: 'Camping_Cars', label: (<><FaCaravan style={{ marginRight: '8px' }} /> Camping-Cars</>) },
    { value: 'Scooters_électriques', label: (<><FaMotorcycle style={{ marginRight: '8px' }} /> Scooters électriques</>) },
    { value: 'Moto_cross', label: (<><FaMotorcycle style={{ marginRight: '8px' }} /> Moto cross</>) },
    { value: 'Vélo_électrique', label: (<><FaBicycle style={{ marginRight: '8px' }} /> Vélo électrique</>) },
    { value: 'Trottinettes_électriques', label: (<>  Trottinettes électriques</>) },
    { value: 'Jet_ski', label: (<>  Jet ski</>) },
    { value: 'Yacht', label: (<><FaShip style={{ marginRight: '8px' }} /> Yacht</>) },
    { value: 'Bus_de_tourisme', label: (<><FaBus style={{ marginRight: '8px' }} /> Bus de tourisme</>) },
    { value: 'Camion_de_déménagement', label: (<><FaTruckMoving style={{ marginRight: '8px' }} /> Camion de déménagement</>) },
    { value: 'Bulldozer', label: (<>  Bulldozer</>) },
    { value: 'Grue', label: (<>  Grue</>) },
    { value: 'Trains', label: (<>  Trains</>) },
    { value: 'Hélicoptère', label: (<>  Hélicoptère</>) },
    { value: 'Avion_prive', label: (<>  Avion privé</>) },
  ];

  return (
    <div  >
      <Select
        options={options}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'title',
            value: selectedOption?.value || '',
            type: 'text',
            checked: undefined
          }
        })}
        name="title"
        value={postData ? options.find(opt => opt.value === postData.title) : null}
        placeholder="Sélectionner une sub-catégorie"
      />
    </div>
  );
}


export function Subcategoryimmobilier({ handleChangeInput, postData }) {
  const options = [
    { value: 'Vente', label: (<><FaShoppingCart style={{ marginRight: '8px' }}/> Vente</>) },
    { value: 'Location', label: (<><FaHome style={{ marginRight: '8px' }}/> Location</>) },
    { value: 'Location_Vacances', label: (<><FaSuitcaseRolling style={{ marginRight: '8px' }}/> Location pour Vacances</>) },
    { value: 'Echange', label: (<><FaExchangeAlt style={{ marginRight: '8px' }}/> Echange</>) },
    { value: 'Cherche_Location', label: (<><FaSearch style={{ marginRight: '8px' }}/> Cherche Location</>) },
    { value: 'Cherche_Achat', label: (<><FaHandshake style={{ marginRight: '8px' }}/> Cherche Achat</>) },
  
    
  ];

  return (
    <div style={{ width: '300px', margin: '20px auto' }}>
      <Select
        options={options}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'title',
            value: selectedOption?.value || '',
            type: 'text',
            checked: undefined
          }
        })}
        name="title"
        value={postData ? options.find(opt => opt.value === postData.title) : null}
        placeholder="Sélectionner une sub-catégorie"
      />
    </div>
  );
}


export function ItemsImmobilier({ handleChangeInput, postData }) {
  const options = [
    { value: 'Appartement', label: (<><FaBuilding style={{ marginRight: '8px' }}/> Appartement</>) },
  { value: 'Villa', label: (<><FaHome style={{ marginRight: '8px' }}/> Villa</>) },
  { value: 'Local', label: (<><FaStore style={{ marginRight: '8px' }}/> Local</>) },
  { value: 'Terrain', label: (<><FaTree style={{ marginRight: '8px' }}/> Terrain</>) },
  { value: 'Carcasse', label: (<><FaWarehouse style={{ marginRight: '8px' }}/> Carcasse</>) },
  { value: 'Niveau de Villa', label: (<><GiLevelEndFlag style={{ marginRight: '8px' }}/> Niveau de Villa</>) },
  { value: 'Terrain Agricole', label: (<><FaPagelines style={{ marginRight: '8px' }}/> Terrain Agricole</>) },
  { value: 'Immeuble', label: (<><FaCity style={{ marginRight: '8px' }}/> Immeuble</>) },
  { value: 'Duplex', label: (<><FaHotel style={{ marginRight: '8px' }}/> Duplex</>) },
  { value: 'Studio', label: (<><FaCouch style={{ marginRight: '8px' }}/> Studio</>) },
  { value: 'Hangar', label: (<><FaWarehouse style={{ marginRight: '8px' }}/> Hangar</>) },
  { value: 'Bungalow', label: (<><GiTreehouse style={{ marginRight: '8px' }}/> Bungalow</>) },
  { value: 'Usine', label: (<><GiFactory style={{ marginRight: '8px' }}/> Usine</>) },

    
  ];

  return (
    <div style={{ width: '300px', margin: '20px auto' }}>
      <Select
        options={options}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'title',
            value: selectedOption?.value || '',
            type: 'text',
            checked: undefined
          }
        })}
        name="title"
        value={postData ? options.find(opt => opt.value === postData.title) : null}
        placeholder="Sélectionner une sub-catégorie"
      />
    </div>
  );
}

export function ItemsInformatique({ handleChangeInput, postData }) {
  const options = [
    { value: 'Ordinateurs portables', label: (<><FaLaptop style={{ marginRight: '8px' }}/> Ordinateurs portables</>) },
  { value: 'Clavier - Souris', label: (<><FaKeyboard style={{ marginRight: '8px' }}/> Clavier - Souris</>) },
  { value: 'Imprimantes et consommables', label: (<><FaPrint style={{ marginRight: '8px' }}/> Imprimantes et consommables</>) },
  { value: 'Casques et Audio', label: (<><FaHeadphones style={{ marginRight: '8px' }}/> Casques et Audio</>) },
  { value: 'Composants PC fixe', label: (<><FaMicrochip style={{ marginRight: '8px' }}/> Composants PC fixe</>) },
  { value: 'Webcam & vidéoconférence', label: (<><FaVideo style={{ marginRight: '8px' }}/> Webcam & vidéoconférence</>) },
  { value: 'Câbles & adaptateurs', label: (<><FaPlug style={{ marginRight: '8px' }}/> Câbles & adaptateurs</>) },
  { value: 'Ordinateurs de bureau', label: (<><FaDesktop style={{ marginRight: '8px' }}/> Ordinateurs de bureau</>) },
  { value: 'Joystick - Manette', label: (<><FaGamepad style={{ marginRight: '8px' }}/> Joystick - Manette</>) },
  { value: 'Réseau & Connexion', label: (<><FaNetworkWired style={{ marginRight: '8px' }}/> Réseau & Connexion</>) },
  { value: 'Cartable et Sacoche', label: (<><GiSchoolBag style={{ marginRight: '8px' }}/> Cartable et Sacoche</>) },

    
  ];

  return (
    <div style={{ width: '300px', margin: '20px auto' }}>
      <Select
        options={options}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'title',
            value: selectedOption?.value || '',
            type: 'text',
            checked: undefined
          }
        })}
        name="title"
        value={postData ? options.find(opt => opt.value === postData.title) : null}
        placeholder="Sélectionner une sub-catégorie"
      />
    </div>
  );
}

export function ItemsTéléphones ({ handleChangeInput, postData }) {
  const options = [
    { value: 'Smartphones', label: (<><FaMobileAlt style={{ marginRight: '8px' }}/> Smartphones</>) },
    { value: 'Téléphones_cellulaires', label: (<><FaPhoneAlt style={{ marginRight: '8px' }}/> Téléphones cellulaires</>) },
    { value: 'Tablettes', label: (<><FaTabletAlt style={{ marginRight: '8px' }}/> Tablettes</>) },
    { value: 'Fixes_fax', label: (<><FaPhoneAlt style={{ marginRight: '8px' }}/> Téléphones fixes et fax</>) },
    { value: 'Smart_watchs', label: (<><FaClock style={{ marginRight: '8px' }}/> Montres connectées</>) },
    { value: 'Offres_et_Abonnements', label: (<><FaSimCard style={{ marginRight: '8px' }}/> Offres et Abonnements</>) },
    { value: 'Pièces_de_rechange', label: (<><FaTools style={{ marginRight: '8px' }}/> Pièces de rechange</>) },
    { value: 'Casques_et_écouteurs', label: (<><FaHeadphonesAlt style={{ marginRight: '8px' }}/> Casques et écouteurs</>) },
    { value: 'Chargeur_et_câble', label: (<><FaChargingStation style={{ marginRight: '8px' }}/> Chargeurs et câbles</>) },
    { value: 'Accessoires', label: (<><FaPlug style={{ marginRight: '8px' }}/> Accessoires</>) },
    { value: 'Power_Banks', label: (<><FaBatteryFull style={{ marginRight: '8px' }}/> Batteries externes</>) },
    { value: 'Baffle', label: (<><FaVolumeUp style={{ marginRight: '8px' }}/> Baffle</>) },
    { value: 'Enceintes_Bluetooth', label: (<><FaBluetooth style={{ marginRight: '8px' }}/> Enceintes Bluetooth</>) },
    { value: 'Support_téléphone', label: (<><FaGripVertical style={{ marginRight: '8px' }}/> Supports pour téléphone</>) },
    { value: 'Protection_écran', label: (<><FaShieldAlt style={{ marginRight: '8px' }}/> Protections d’écran</>) },
    { value: 'Coques', label: (<><FaBoxOpen style={{ marginRight: '8px' }}/> Coques et étuis</>) },
    { value: 'Claviers_et_souris', label: (<><><FaKeyboard style={{ marginRight: '4px' }}/><FaMousePointer style={{ marginLeft: '2px', marginRight: '4px' }}/></> Claviers et souris sans fil</>) },
    { value: 'Station_de_chargement', label: (<><FaChargingStation style={{ marginRight: '8px' }}/> Stations de charge</>) },
    { value: 'Cartes_mémoire', label: (<><FaMemory style={{ marginRight: '8px' }}/> Cartes mémoire</>) },
    { value: 'Dongles_USB', label: (<><FaUsb style={{ marginRight: '8px' }}/> Dongles et adaptateurs USB</>) },
    
  ];

  return (
    <div style={{ width: '300px', margin: '20px auto' }}>
      <Select
        options={options}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'title',
            value: selectedOption?.value || '',
            type: 'text',
            checked: undefined
          }
        })}
        name="title"
        value={postData ? options.find(opt => opt.value === postData.title) : null}
        placeholder="Sélectionner une sub-catégorie"
      />
    </div>
  );
}

export function ItemsVêtementsMode({ handleChangeInput, postData }) {
  const options = [
    { value: 'Vêtements Homme', label: (<><FaMale style={{ marginRight: '8px' }}/> Vêtements Homme</>) },
    { value: 'Vêtements Femme', label: (<><FaFemale style={{ marginRight: '8px' }}/> Vêtements Femme</>) },
    { value: 'Chaussures Homme', label: (<><FaShoePrints style={{ marginRight: '8px' }}/> Chaussures Homme</>) },
    { value: 'Chaussures Femme', label: (<><FaShoePrints style={{ marginRight: '8px' }}/> Chaussures Femme</>) },
    { value: 'Filles', label: (<><FaChild style={{ marginRight: '8px' }}/> Filles</>) },
    { value: 'Garçons', label: (<><FaChild style={{ marginRight: '8px' }}/> Garçons</>) },
    { value: 'Bébé', label: (<><FaBaby style={{ marginRight: '8px' }}/> Bébé</>) },
    { value: 'Montres', label: (<><FaClock style={{ marginRight: '8px' }}/> Montres</>) },
    { value: 'Lunettes', label: (<><FaGlasses style={{ marginRight: '8px' }}/> Lunettes</>) },
    { value: 'Bijoux', label: (<><FaGem style={{ marginRight: '8px' }}/> Bijoux</>) },
    { value: 'Cartables & Valises', label: (<><FaSuitcase style={{ marginRight: '8px' }}/> Cartables & Valises</>) },
  
    
  ];

  return (
    <div style={{ width: '300px', margin: '20px auto' }}>
      <Select
        options={options}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'title',
            value: selectedOption?.value || '',
            type: 'text',
            checked: undefined
          }
        })}
        name="title"
        value={postData ? options.find(opt => opt.value === postData.title) : null}
        placeholder="Sélectionner une sub-catégorie"
      />
    </div>
  );
}


export function ItemsSantéBeauté({ handleChangeInput, postData }) {
  const options = [
    { value: 'Cosmétiques & Beauté', label: (<><FaPumpSoap style={{ marginRight: '8px' }}/> Cosmétiques & Beauté</>) },
    { value: 'Parfums et déodorants femme', label: (<><FaSprayCan style={{ marginRight: '8px' }}/> Parfums et déodorants femme</>) },
    { value: 'Parfums et déodorants homme', label: (<><FaSprayCan style={{ marginRight: '8px' }}/> Parfums et déodorants homme</>) },
    { value: 'Parapharmacie & Santé', label: (<><FaFirstAid style={{ marginRight: '8px' }}/> Parapharmacie & Santé</>) },
  
    
  ];

  return (
    <div style={{ width: '300px', margin: '20px auto' }}>
      <Select
        options={options}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'title',
            value: selectedOption?.value || '',
            type: 'text',
            checked: undefined
          }
        })}
        name="title"
        value={postData ? options.find(opt => opt.value === postData.title) : null}
        placeholder="Sélectionner une sub-catégorie"
      />
    </div>
  );
}


export function ItemsMeublesMaison({ handleChangeInput, postData }) {
  const options = [
    { value: 'Meubles de maison', label: (<><FaCouch style={{ marginRight: '8px' }}/> Meubles de maison</>) },
    { value: 'Décoration', label: (<><FaPaintRoller style={{ marginRight: '8px' }}/> Décoration</>) },
    { value: 'Vaisselle', label: (<><FaUtensils style={{ marginRight: '8px' }}/> Vaisselle</>) },
    { value: 'Meubles de bureau', label: (<><FaChair style={{ marginRight: '8px' }}/> Meubles de bureau</>) },
    { value: 'Rideaux', label: (<><FaStream style={{ marginRight: '8px' }}/> Rideaux</>) },
    { value: 'Literie & Linge', label: (<><FaBed style={{ marginRight: '8px' }}/> Literie & Linge</>) },
    { value: 'Puériculture', label: (<><FaBaby style={{ marginRight: '8px' }}/> Puériculture</>) },
    { value: 'Tapis & Moquettes', label: (<><FaGripVertical style={{ marginRight: '8px' }}/> Tapis & Moquettes</>) },
    { value: 'Mobilier de jardin', label: (<><FaTree style={{ marginRight: '8px' }}/> Mobilier de jardin</>) },
    { value: 'Fournitures et articles scolaires', label: (<><FaPencilRuler style={{ marginRight: '8px' }}/> Fournitures et articles scolaires</>) },
    { value: 'Luminaire', label: (<><FaLightbulb style={{ marginRight: '8px' }}/> Luminaire</>) },
  
    
  ];

  return (
    <div style={{ width: '300px', margin: '20px auto' }}>
      <Select
        options={options}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'title',
            value: selectedOption?.value || '',
            type: 'text',
            checked: undefined
          }
        })}
        name="title"
        value={postData ? options.find(opt => opt.value === postData.title) : null}
        placeholder="Sélectionner une sub-catégorie"
      />
    </div>
  );
}


export function ItemsEmploi({ handleChangeInput, postData }) {
  const options = [
    { value: 'Commercial & Marketing', label: (<><FaHandshake style={{ marginRight: '8px' }}/> Commercial & Marketing</>) },
    { value: 'Commerce & Vente', label: (<><FaShoppingCart style={{ marginRight: '8px' }}/> Commerce & Vente</>) },
    { value: 'Éducation & Formations', label: (<><FaBookOpen style={{ marginRight: '8px' }}/> Éducation & Formations</>) },
    { value: 'Industrie & Production', label: (<><FaIndustry style={{ marginRight: '8px' }}/> Industrie & Production</>) },
    { value: 'Tourisme & Gastronomie', label: (<><FaUtensils style={{ marginRight: '8px' }}/> Tourisme & Gastronomie</>) },
    { value: 'Bureautique & Secrétariat', label: (<><FaKeyboard style={{ marginRight: '8px' }}/> Bureautique & Secrétariat</>) },
    { value: 'Beauté & Esthétique', label: (<><FaSpa style={{ marginRight: '8px' }}/> Beauté & Esthétique</>) },
    { value: 'Nettoyage & Hygiène', label: (<><FaBroom style={{ marginRight: '8px' }}/> Nettoyage & Hygiène</>) },
    { value: 'Informatique & Internet', label: (<><FaLaptopCode style={{ marginRight: '8px' }}/> Informatique & Internet</>) },
    { value: 'Comptabilité & Audit', label: (<><FaCalculator style={{ marginRight: '8px' }}/> Comptabilité & Audit</>) },
    { value: 'Couture & Confection', label: (<><FaSocks style={{ marginRight: '8px' }}/> Couture & Confection</>) },
    { value: 'Administration & Management', label: (<><FaUserTie style={{ marginRight: '8px' }}/> Administration & Management</>) },
    { value: 'Graphisme & Communication', label: (<><FaPenNib style={{ marginRight: '8px' }}/> Graphisme & Communication</>) },
  
    
  ];

  return (
    <div style={{ width: '300px', margin: '20px auto' }}>
      <Select
        options={options}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'title',
            value: selectedOption?.value || '',
            type: 'text',
            checked: undefined
          }
        })}
        name="title"
        value={postData ? options.find(opt => opt.value === postData.title) : null}
        placeholder="Sélectionner une sub-catégorie"
      />
    </div>
  );
}

export function ItemsServices({ handleChangeInput, postData }) {
  const options = [
    { value: 'Construction & Travaux', label: (<><FaHardHat style={{ marginRight: '8px' }}/> Construction & Travaux</>) },
  { value: 'Écoles & Formations', label: (<><FaUniversity style={{ marginRight: '8px' }}/> Écoles & Formations</>) },
  { value: 'Industrie & Fabrication', label: (<><FaIndustry style={{ marginRight: '8px' }}/> Industrie & Fabrication</>) },
  { value: 'Transport et Déménagement', label: (<><FaTruckMoving style={{ marginRight: '8px' }}/> Transport et Déménagement</>) },
  { value: 'Décoration & Aménagement', label: (<><FaPaintRoller style={{ marginRight: '8px' }}/> Décoration & Aménagement</>) },
  { value: 'Publicité & Communication', label: (<><FaBullhorn style={{ marginRight: '8px' }}/> Publicité & Communication</>) },
  { value: 'Nettoyage & Jardinage', label: (<><FaLeaf style={{ marginRight: '8px' }}/> Nettoyage & Jardinage</>) },
  { value: 'Froid & Climatisation', label: (<><FaSnowflake style={{ marginRight: '8px' }}/> Froid & Climatisation</>) },
  { value: 'Traiteurs & Gâteaux', label: (<><FaBirthdayCake style={{ marginRight: '8px' }}/> Traiteurs & Gâteaux</>) },
  { value: 'Médecine & Santé', label: (<><FaStethoscope style={{ marginRight: '8px' }}/> Médecine & Santé</>) },
  { value: 'Réparation auto & Diagnostic', label: (<><FaTools style={{ marginRight: '8px' }}/> Réparation auto & Diagnostic</>) },

    
  ];

  return (
    <div style={{ width: '300px', margin: '20px auto' }}>
      <Select
        options={options}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'title',
            value: selectedOption?.value || '',
            type: 'text',
            checked: undefined
          }
        })}
        name="title"
        value={postData ? options.find(opt => opt.value === postData.title) : null}
        placeholder="Sélectionner une sub-catégorie"
      />
    </div>
  );
}

export function ItemsLoisirsDivertissements({ handleChangeInput, postData }) {
  const options = [
    { value: 'Voitures', label: (<><FaCar style={{ marginRight: '8px' }} /> Voitures</>) },
    
  ];

  return (
    <div style={{ width: '300px', margin: '20px auto' }}>
      <Select
        options={options}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'title',
            value: selectedOption?.value || '',
            type: 'text',
            checked: undefined
          }
        })}
        name="title"
        value={postData ? options.find(opt => opt.value === postData.title) : null}
        placeholder="Sélectionner une sub-catégorie"
      />
    </div>
  );
}

export function ItemsMatériauxÉquipement({ handleChangeInput, postData }) {
  const options = [
    { value: 'Voitures', label: (<><FaCar style={{ marginRight: '8px' }} /> Voitures</>) },
    
  ];

  return (
    <div style={{ width: '300px', margin: '20px auto' }}>
      <Select
        options={options}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'title',
            value: selectedOption?.value || '',
            type: 'text',
            checked: undefined
          }
        })}
        name="title"
        value={postData ? options.find(opt => opt.value === postData.title) : null}
        placeholder="Sélectionner une sub-catégorie"
      />
    </div>
  );
}

export function Itemssport({ handleChangeInput, postData }) {
  const options = [
    { value: 'Voitures', label: (<><FaCar style={{ marginRight: '8px' }} /> Voitures</>) },
    
  ];

  return (
    <div style={{ width: '300px', margin: '20px auto' }}>
      <Select
        options={options}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'title',
            value: selectedOption?.value || '',
            type: 'text',
            checked: undefined
          }
        })}
        name="title"
        value={postData ? options.find(opt => opt.value === postData.title) : null}
        placeholder="Sélectionner une sub-catégorie"
      />
    </div>
  );
}












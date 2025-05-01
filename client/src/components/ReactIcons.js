import Select from 'react-select';
//import { MdDrone } from 'react-icons/md';
import {  FaTruckPickup} from 'react-icons/fa';
import { FaBus,FaMotorcycle,FaShuttleVan,FaTractor,FaShip,FaCaravan, FaBicycle,    FaCar, FaHome, FaLaptop, FaMobileAlt, FaTshirt, FaHeart, FaCouch, FaBriefcase, FaTools, FaGamepad, FaWrench, FaCog, FaBasketballBall } from 'react-icons/fa';
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
import { FaHardHat, FaUniversity,  FaTruckMoving,  
  FaBullhorn, FaLeaf,   FaBirthdayCake, FaStethoscope, 
      FaBook,   
  FaSmile, FaMusic, 
   FaCut,     FaCalendarAlt,
  FaSatelliteDish,    FaGlobe, FaBalanceScale } from 'react-icons/fa';
  import { FaPaw,   FaDice, 
    FaFish,  FaHistory, FaFire, 
    FaSmoking } from 'react-icons/fa';
    import {  FaBolt, 
       FaHospital,  
      } from 'react-icons/fa';
      import {  
        FaOilCan,   FaDiagnoses } from 'react-icons/fa';
        import { FaFutbol,    FaDumbbell, 
          FaSwimmer,  FaTableTennis, FaWater, 
          FaHorseHead, FaDotCircle, FaQuestion } from 'react-icons/fa';
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
    <div >
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
 

  return (
    <div >
 
        
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
    <div >
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
    <div >
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
    <div >
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
    <div >
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
    <div >
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
    <div >
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
    <div >
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
    { value: 'Bureautique & Internet', label: (<><FaLaptop style={{ marginRight: '8px' }}/> Bureautique & Internet</>) },
    { value: 'Comptabilité & Economie', label: (<><FaCalculator style={{ marginRight: '8px' }}/> Comptabilité & Economie</>) },
    { value: 'Construction & Travaux', label: (<><FaHardHat style={{ marginRight: '8px' }}/> Construction & Travaux</>) },
    { value: 'Couture & Confection', label: (<><FaCut style={{ marginRight: '8px' }}/> Couture & Confection</>) },
    { value: 'Décoration & Aménagement', label: (<><FaPaintRoller style={{ marginRight: '8px' }}/> Décoration & Aménagement</>) },
    { value: 'Esthétique & Beauté', label: (<><FaSmile style={{ marginRight: '8px' }}/> Esthétique & Beauté</>) },
    { value: 'Evènements & Divertissement', label: (<><FaCalendarAlt style={{ marginRight: '8px' }}/> Evènements & Divertissement</>) },
    { value: 'Flashage & Installation des jeux', label: (<><FaGamepad style={{ marginRight: '8px' }}/> Flashage & Installation des jeux</>) },
    { value: 'Flashage & Réparation des téléphones', label: (<><FaMobileAlt style={{ marginRight: '8px' }}/> Flashage & Réparation des téléphones</>) },
    { value: 'Froid & Climatisation', label: (<><FaSnowflake style={{ marginRight: '8px' }}/> Froid & Climatisation</>) },
    { value: 'Hôtellerie & Restauration & Salles', label: (<><FaUtensils style={{ marginRight: '8px' }}/> Hôtellerie & Restauration & Salles</>) },
    { value: 'Image & Son', label: (<><FaMusic style={{ marginRight: '8px' }}/> Image & Son</>) },
    { value: 'Impression & Edition', label: (<><FaPrint style={{ marginRight: '8px' }}/> Impression & Edition</>) },
    { value: 'Industrie & Fabrication', label: (<><FaIndustry style={{ marginRight: '8px' }}/> Industrie & Fabrication</>) },
    { value: 'Juridique', label: (<><FaBalanceScale style={{ marginRight: '8px' }}/> Juridique</>) },
    { value: 'Location de véhicules', label: (<><FaCar style={{ marginRight: '8px' }}/> Location de véhicules</>) },
    { value: 'Maintenance informatique', label: (<><FaDesktop style={{ marginRight: '8px' }}/> Maintenance informatique</>) },
    { value: 'Menuiserie & Meubles', label: (<><FaChair style={{ marginRight: '8px' }}/> Menuiserie & Meubles</>) },
    { value: 'Médecine & Santé', label: (<><FaStethoscope style={{ marginRight: '8px' }}/> Médecine & Santé</>) },
    { value: 'Nettoyage & Jardinage', label: (<><FaLeaf style={{ marginRight: '8px' }}/> Nettoyage & Jardinage</>) },
    { value: 'Paraboles & Démos', label: (<><FaSatelliteDish style={{ marginRight: '8px' }}/> Paraboles & Démos</>) },
    { value: 'Projets & Études', label: (<><FaBook style={{ marginRight: '8px' }}/> Projets & Études</>) },
    { value: 'Publicité & Communication', label: (<><FaBullhorn style={{ marginRight: '8px' }}/> Publicité & Communication</>) },
    { value: 'Réparation auto & Diagnostic', label: (<><FaTools style={{ marginRight: '8px' }}/> Réparation auto & Diagnostic</>) },
    { value: 'Réparation Electromenager', label: (<><FaPlug style={{ marginRight: '8px' }}/> Réparation Electromenager</>) },
    { value: 'Réparation Eléctronique', label: (<><FaPlug style={{ marginRight: '8px' }}/> Réparation Eléctronique</>) },
    { value: 'Sécurité & Alarme', label: (<><FaShieldAlt style={{ marginRight: '8px' }}/> Sécurité & Alarme</>) },
    { value: 'Services à l\'étranger', label: (<><FaGlobe style={{ marginRight: '8px' }}/> Services à l'étranger</>) },
    { value: 'Traiteurs & Gâteaux', label: (<><FaBirthdayCake style={{ marginRight: '8px' }}/> Traiteurs & Gâteaux</>) },
    { value: 'Transport et Déménagement', label: (<><FaTruckMoving style={{ marginRight: '8px' }}/> Transport et Déménagement</>) },
    { value: 'Écoles & Formations', label: (<><FaUniversity style={{ marginRight: '8px' }}/> Écoles & Formations</>) }
    
  ];

  return (
    <div >
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
    { value: 'Animalerie', label: (<><FaPaw style={{ marginRight: '8px' }} /> Animalerie</>) },
    { value: 'Antiquités & Collections', label: (<><FaHistory style={{ marginRight: '8px' }} /> Antiquités & Collections</>) },
    { value: 'Barbecue & Grillades', label: (<><FaFire style={{ marginRight: '8px' }} /> Barbecue & Grillades</>) },
    { value: 'Chasse & Pêche', label: (<><FaFish style={{ marginRight: '8px' }} /> Chasse & Pêche</>) },
    { value: 'Consoles et Jeux Vidéos', label: (<><FaGamepad style={{ marginRight: '8px' }} /> Consoles et Jeux Vidéos</>) },
    { value: 'Instruments de Musique', label: (<><FaMusic style={{ marginRight: '8px' }} /> Instruments de Musique</>) },
    { value: 'Jardinage', label: (<><FaLeaf style={{ marginRight: '8px' }} /> Jardinage</>) },
    { value: 'Jouets', label: (<><FaChild style={{ marginRight: '8px' }} /> Jouets</>) },
    { value: 'Les Jeux de loisirs', label: (<><FaDice style={{ marginRight: '8px' }} /> Les Jeux de loisirs</>) },
    { value: 'Livres & Magazines', label: (<><FaBook style={{ marginRight: '8px' }} /> Livres & Magazines</>) },
    { value: 'Vapes & Chichas', label: (<><FaSmoking style={{ marginRight: '8px' }} /> Vapes & Chichas</>) }
    
  ];

  return (
    <div >
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
    { value: 'Matériaux de construction', label: (<><FaBuilding style={{ marginRight: '8px' }} /> Matériaux de construction</>) },
    { value: 'Outillage et quincaillerie', label: (<><FaTools style={{ marginRight: '8px' }} /> Outillage et quincaillerie</>) },
    { value: 'Électricité et plomberie', label: (<><FaBolt style={{ marginRight: '8px' }} /> Électricité et plomberie</>) },
    { value: 'Peinture et décoration', label: (<><FaPaintRoller style={{ marginRight: '8px' }} /> Peinture et décoration</>) },
    { value: 'Matériel professionnel', label: (<><FaHardHat style={{ marginRight: '8px' }} /> Matériel professionnel</>) },
    { value: 'Matériel médical', label: (<><FaHospital style={{ marginRight: '8px' }} /> Matériel médical</>) },
    { value: 'Matériel de jardinage', label: (<><FaLeaf style={{ marginRight: '8px' }} /> Matériel de jardinage</>) },
    { value: 'Matériel de cuisine', label: (<><FaUtensils style={{ marginRight: '8px' }} /> Matériel de cuisine</>) },
    { value: 'Matériel de nettoyage', label: (<><FaBroom style={{ marginRight: '8px' }} /> Matériel de nettoyage</>) },
    { value: 'Matériel de sécurité', label: (<><FaShieldAlt style={{ marginRight: '8px' }} /> Matériel de sécurité</>) },
    { value: 'Matériel de bureautique', label: (<><FaLaptop style={{ marginRight: '8px' }} /> Matériel de bureautique</>) }
    
  ];

  return (
    <div >
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


export function ItemsPiècesdétachées({ handleChangeInput, postData }) {
  const options = [
    { value: 'Pièces Automobiles', label: (<><FaCar style={{ marginRight: '8px' }} /> Pièces Automobiles</>) },
    { value: 'Pièces Véhicules', label: (<><FaCar style={{ marginRight: '8px' }} /> Pièces Véhicules</>) },
    { value: 'Alarme et sécurité', label: (<><FaShieldAlt style={{ marginRight: '8px' }} /> Alarme et sécurité</>) },
    { value: 'Lubrifiants', label: (<><FaOilCan style={{ marginRight: '8px' }} /> Lubrifiants</>) },
    { value: 'Nettoyage & Entretien', label: (<><FaBroom style={{ marginRight: '8px' }} /> Nettoyage & Entretien</>) },
    { value: 'Pièces Moto', label: (<><FaMotorcycle style={{ marginRight: '8px' }} /> Pièces Moto</>) },
    { value: 'Outils de diagnostics', label: (<><FaDiagnoses style={{ marginRight: '8px' }} /> Outils de diagnostics</>) },
    { value: 'Pièces Bateaux', label: (<><FaShip style={{ marginRight: '8px' }} /> Pièces Bateaux</>) }
    
  ];

  return (
    <div >
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
    { value: 'Football', label: (<><FaFutbol style={{ marginRight: '8px' }} /> Football</>) },
    { value: 'Hand/Voley/Basket-Ball', label: (<><FaBasketballBall style={{ marginRight: '8px' }} /> Hand/Voley/Basket-Ball</>) },
    { value: 'Sport de combat', label: (<>  Sport de combat</>) },
    { value: 'Fitness - Musculation', label: (<><FaDumbbell style={{ marginRight: '8px' }} /> Fitness - Musculation</>) },
    { value: 'Natation', label: (<><FaSwimmer style={{ marginRight: '8px' }} /> Natation</>) },
    { value: 'Vélos et trottinettes', label: (<><FaBicycle style={{ marginRight: '8px' }} /> Vélos et trottinettes</>) },
    { value: 'Sports de raquette', label: (<><FaTableTennis style={{ marginRight: '8px' }} /> Sports de raquette</>) },
    { value: 'Sport aquatiques', label: (<><FaWater style={{ marginRight: '8px' }} /> Sport aquatiques</>) },
    { value: 'Équitation', label: (<><FaHorseHead style={{ marginRight: '8px' }} /> Équitation</>) },
    { value: 'Pétanque', label: (<><FaDotCircle style={{ marginRight: '8px' }} /> Pétanque</>) },
    { value: 'Autres', label: (<><FaQuestion style={{ marginRight: '8px' }} /> Autres</>) }
    
  ];

  return (
    <div >
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












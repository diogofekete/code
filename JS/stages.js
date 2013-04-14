var Stages = [{
    id: 1,						// ID of this stage
    name: "Bacteria Growing",		// Name of this stage
	health: 50,					// Initial health points
	rbc: 3,						// Quantity of blood cells created per interval
	rbcInterval: 500, 			// Controls creation frequency of blood cells
	rbcXBoost: 0,				// Increase (+) or decrease (-) the default velocity (0.22) of all RBC 
    virus: 0, 					// Controls creation frequency of this enemy
	virusDuplicationRate: 0,	// Probability of a virus duplicates when kill a RBC
    bacteria: 1500, 			// Controls creation frequency of this enemy
    protozoa: 1500, 			// Controls creation frequency of this enemy
    fungi: 0,					// Controls creation frequency of this enemy
    gapSize: 70, 				// Controls the initial size of the wound (bigger = more room for enemies to appear)
	boneMarrowCapacity: 80,		// Initial BoneMarrow capacity of WBC creation: 50 = very low ... 300 = very high
	boneMarrowRegeneration: .1, // Regeneration frequency of the BoneMarrow: .03 = very slow ... 3 = very fast
	boneMarrowWbcUse: 3, 		// Initial cost for WBC creation: 1 = little ... 20 = a lot
	boneMarrowStamina: .4, 		// Stamina controls WBC creation frequency (high creation frequency more BoneMarrowUse): .1 = LOW stamina ... 1 = HIGH stamina
	vitamins: 1,				// Number max of vitamins created at the same time
	vitaminRate: .002			// Probality to create a vitamin each frame: .0001 LOW probability ... .1 HIGH probability
}, {
	id: 2,						// ID of this stage
    name: "Bacteria Growing",		// Name of this stage
	health: 50,					// Initial health points
	rbc: 3,						// Quantity of blood cells created per interval
	rbcInterval: 350, 			// Controls creation frequency of blood cells
	rbcXBoost: 0,				// Increase (+) or decrease (-) the default velocity (0.22) of all RBC 
    virus: 0, 					// Controls creation frequency of this enemy
	virusDuplicationRate: 0,	// Probability of a virus duplicates when kill a RBC
    bacteria: 1000, 			// Controls creation frequency of this enemy
    protozoa: 1000, 			// Controls creation frequency of this enemy
    fungi: 0,					// Controls creation frequency of this enemy
    gapSize: 110, 				// Controls the initial size of the wound (bigger = more room for enemies to appear)
	boneMarrowCapacity: 80,		// Initial BoneMarrow capacity of WBC creation: 50 = very low ... 300 = very high
	boneMarrowRegeneration: .1, // Regeneration frequency of the BoneMarrow: .03 = very slow ... 3 = very fast
	boneMarrowWbcUse: 4, 		// Initial cost for WBC creation: 1 = little ... 20 = a lot
	boneMarrowStamina: .3, 		// Stamina controls WBC creation frequency (high creation frequency more BoneMarrowUse): .1 = LOW stamina ... 1 = HIGH stamina
	vitamins: 1,				// Number max of vitamins created at the same time
	vitaminRate: .003			// Probality to create a vitamin each frame: .0001 LOW probability ... .1 HIGH probability
}, {
	id: 3,						
	name: "Bacteria Growing",	
	health: 50,					
	rbc: 3,						
	rbcInterval: 350, 			
	rbcXBoost: 0,				
	virus: 1000, 				
	virusDuplicationRate: .2,	
	bacteria: 0, 			
	protozoa: 0, 			
	fungi: 0,					
	gapSize: 120, 				
	boneMarrowCapacity: 80,		
	boneMarrowRegeneration: .1, 
	boneMarrowWbcUse: 4, 		
	boneMarrowStamina: .3, 		
	vitamins: 1,				
	vitaminRate: .003		
}, {
	id: 4,							
	name: "Bacteria Growing",	
	health: 50,					
	rbc: 3,						
	rbcInterval: 350, 			
	rbcXBoost: 0,				
	virus: 1500, 				
	virusDuplicationRate: .2,	
	bacteria: 1500, 			
	protozoa: 1000, 			
	fungi: 0,					
	gapSize: 130, 				
	boneMarrowCapacity: 120,	
	boneMarrowRegeneration: .1, 
	boneMarrowWbcUse: 4, 		
	boneMarrowStamina: .5, 		
	vitamins: 2,				
	vitaminRate: .004		
}, {
	id: 5,							
	name: "Bacteria Growing",	
	health: 50,					
	rbc: 3,						
	rbcInterval: 350, 			
	rbcXBoost: 0,				
	virus: 3500, 				
	virusDuplicationRate: .2,	
	bacteria: 3200, 			
	protozoa: 2700, 			
	fungi: 1200,				
	gapSize: 140, 				
	boneMarrowCapacity: 120,	
	boneMarrowRegeneration: .1, 
	boneMarrowWbcUse: 6, 		
	boneMarrowStamina: .5, 		
	vitamins: 2,				
	vitaminRate: .004			
}, {
	id: 6,						
	name: "Bacteria Growing",	
	health: 50,					
	rbc: 3,						
	rbcInterval: 700, 			
	rbcXBoost: 0,				
	virus: 2400, 				
	virusDuplicationRate: .2,	
	bacteria: 1800, 			
	protozoa: 2700, 			
	fungi: 1500,				
	gapSize: 150, 				
	boneMarrowCapacity: 150,	
	boneMarrowRegeneration: .1, 
	boneMarrowWbcUse: 6, 		
	boneMarrowStamina: .6, 		
	vitamins: 3,				
	vitaminRate: .004	
}, {
	id: 7,								
	name: "Bacteria Growing",	
	health: 50,					
	rbc: 3,						
	rbcInterval: 400, 			
	rbcXBoost: 0,				
	virus: 1800, 				
	virusDuplicationRate: .4,	
	bacteria: 1800, 			
	protozoa: 2700, 			
	fungi: 1500,				
	gapSize: 160, 				
	boneMarrowCapacity: 150,	
	boneMarrowRegeneration: .1, 
	boneMarrowWbcUse: 6, 		
	boneMarrowStamina: .8, 		
	vitamins: 3,				
	vitaminRate: .006	
}];	
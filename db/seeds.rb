puts "Seeding...."

# User.create(
#     user_name: "jdoud1993",
#     password: "Steelers3"
# )
# puts "Seeding....User Completed"

Animal.create(
    name: "Uknown",
    species: "Dog",
    breed: "Labrador Retriever",
    sex: "Male",
    age: "2 yr",
    color_primary: "Black",
    color_secondary: "None"
)

Animal.create(
    name: "Chidori",
    species: "Cat",
    breed: "Siamese",
    sex: "Male",
    age: "6 yr",
    color_primary: "Seal Pt",
    color_secondary: "White"
)

Animal.create(
    name: "Onyxia",
    species: "Dog",
    breed: "Cocker Spaniel",
    sex: "Female",
    age: "8 yr",
    color_primary: "Black",
    color_secondary: "None"
)
puts "Seeding....Animals Completed"

Client.create(
    name_first: "Kenneth",
    name_last: "Fox",
    phone_number: "(661) 288-5555",
    address: "2468 Foxtrot Street, Lancaster, Ca 93536",
    email: "client@noemail.com",
)

Client.create(
    name_first: "Daisy",
    name_last: "May",
    phone_number: "(661) 256-8888",
    address: "56204 Spine Court, Lancaster, Ca 93534",
    email: "dmay24@gmail.com",
)

Client.create(
    name_first: "John",
    name_last: "Doe",
    phone_number: "(661) 890-1111",
    address: "1100 East Upland Drive, Lancaster, Ca 93535",
    email: "jdeast@yahoo.com",
)
puts "Seeding....Clients Completed"
large = 1

until large == 11 do 
    Kennel.create(
        kennel_number: "L#{large}",
        large_small: "Large",
    )
    large += 1
end

small = 1 

until small == 6 do 
    Kennel.create(
        kennel_number: "S#{small}",
        large_small: "Small",
    )
    small += 1
end
puts "Seeding....Kennels Completed"
Impound.create(
    animal_id: 1,
    client_id: 2,
    kennel_id: 5,
    address_found: "2400 Foxtrot Street, Lancaster Ca 93536",
    status: "Stray Wait",
    user_id: 1,
)

Impound.create(
    animal_id: 2,
    client_id: 1,
    kennel_id: 11,
    address_found: "600 Base Street, Lancaster Ca 93536",
    status: "Stray Wait",
    user_id: 1,
)

Impound.create(
    animal_id: 3,
    client_id: 3,
    kennel_id: 5,
    address_found: "22000 Lakeview Avenue, Lancaster Ca 93534",
    status: "Stray Wait",
    user_id: 1,
)
puts "Seeding....Impounds Completed"
puts "✅ Done seeding!"